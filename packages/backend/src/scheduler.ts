import schedule from "node-schedule";
import moment from "moment";
import pg = require("pg");
import { query } from "express";
import { selectAllLost } from "./queries";
import { getStatusId } from "./db";
import { sendEmail } from "./util";
import { followupEmailDay7 } from "./emailText";

export const setupSchedules = ({ client }: { client: pg.Client }): void => {
  const rule = new schedule.RecurrenceRule();
  rule.tz = "Europe/Oslo";
  rule.hour = 15;
  rule.minute = 12;

  schedule.scheduleJob(rule, () => {
    const lastWeek = moment().utc().subtract(7, "days").startOf("day");
    getStatusId("Mistet", { client })
      .then((statusRes) => {
        if (statusRes.rowCount > 0) {
          const statusid = statusRes.rows[0].statusid;
          client
            .query(selectAllLost, [statusid])
            .then((queryResult) => {
              const toBeEmailed = queryResult.rows.filter((row) => {
                return moment.utc(row.date).diff(lastWeek, "days") === 0;
              });
              const emails: string[] = [];
              toBeEmailed.forEach((row) => {
                emails.push(row.email);
              });
              const uniqueEmails = new Set(emails);
              uniqueEmails.forEach((email) => {
                sendEmail(email, "AtB hittegods", followupEmailDay7);
              });
            })
            .catch();
        }
      })
      .catch();
  });
  console.log("Schedule setup");
};
