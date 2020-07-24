import express, { Request, Response } from "express";
import pg = require("pg");
import { registerPostValidator } from "./validators/registerValidator";
import {
  getColorId,
  getLineId,
  getSubCategoryId,
  getCategoryId,
  getStatusId,
} from "./db";
import { insertNewLost } from "./queries";
import fetch from "node-fetch";
import { dbError, sendEmail } from "./util";
import { confirmationEmail } from "./emailText";

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  const registerEndpoint = "/api/register";

  app.post(registerEndpoint, (req, res) => {
    const body = req.body;
    const { error, value } = registerPostValidator.validate(body);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      const categoryIdPromise = getCategoryId(req.body.category, { client });
      const subCategoryIdPromise = getSubCategoryId(req.body.subCategory, {
        client,
      });
      const lineIdPromise = getLineId(req.body.line, { client });
      const colorIdPromise = getColorId(req.body.color, { client });
      const statusIdPromise = getStatusId("Mistet", { client });
      Promise.all([
        categoryIdPromise,
        subCategoryIdPromise,
        lineIdPromise,
        colorIdPromise,
        statusIdPromise,
      ])
        .then((data) => {
          //TODO: validate category, subcat, line, color against database tables. Error if they do not exist in database
          if (
            data.every((queryResult) => {
              return queryResult.rowCount != 0;
            })
          ) {
            const categoryId = data[0].rows[0].categoryid;
            const subCategoryId = data[1].rows[0].subcategoryid;
            const lineId = data[2].rows[0].lineid;
            const colorId = data[3].rows[0].colorid;
            const statusId = data[4].rows[0].statusid;
            client
              .query(insertNewLost, [
                body.name,
                body.email,
                body.phoneNumber,
                body.description,
                body.brand,
                body.date,
                lineId,
                colorId,
                categoryId,
                subCategoryId,
                statusId,
              ])
              .then((queryRes) => {
                //TODO check that response is compliant with api docs
                //fetch request to
                res.json({ status: "success", data: body });
                const lostid = queryRes.rows[0].lostid;
                const url = process.env.MATCH_BACKEND_HOST + "/lost/" + lostid;
                console.log("Notify new lost to hittegods-matchmaker : " + url);
                fetch(url)
                  .then((response) => {
                    console.log("Hittegods-matchmaker: ", response.ok);
                  })
                  .catch();
                if (body.email) {
                  console.log("Sending email");
                  sendEmail(
                    body.email,
                    "AtB hittegods",
                    confirmationEmail(
                      body.name,
                      body.date,
                      body.line,
                      body.color,
                      body.brand,
                      body.description
                    )
                  );
                }
              })
              .catch((e) => {
                dbError(e, res);
              });
          } else {
            if (data[0].rowCount === 0) {
              res.status(400).json({
                status: "error",
                errorMessage: "invalid category",
              });
            } else if (data[1].rowCount === 0) {
              res.status(400).json({
                status: "error",
                errorMessage: "invalid subcategory",
              });
            } else if (data[2].rowCount === 0) {
              res.status(400).json({
                status: "error",
                errorMessage: "invalid line",
              });
            } else if (data[3].rowCount === 0) {
              res.status(400).json({
                status: "error",
                errorMessage: "invalid color",
              });
            } else {
              console.error("Invalid status");
              res.status(500).json({
                status: "error",
                errorMessage: "internal server error",
              });
            }
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  type Line = {
    line: string;
    description: string;
  };
  app.get("/api/line", (req: Request, res: Response) => {
    client
      .query("select line, description from line")
      .then((queryResult) => {
        const lines: Array<Line> = [];
        queryResult.rows.forEach((row) => {
          if (row.line != "") {
            const line: Line = { line: row.line, description: row.description };
            lines.push(line);
          }
        });
        res.json({ status: "success", data: { lines: lines } });
      })
      .catch((e) => {
        dbError(e, res);
      });
  });
};
