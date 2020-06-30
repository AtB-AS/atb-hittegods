import express from "express";
import pg = require("pg");
import {
  registerGetValidator,
  registerPostValidator,
} from "./validators/registerValidator";
import { v4 as uuidv4 } from "uuid";
import {
  getColorId,
  getLineId,
  getSubCategoryId,
  getCategoryId,
  getStatusId,
} from "./db";
import { selectLostByRefnum, insertNewLost } from "./queries";

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  const registerEndpoint = "/api/register";

  app.get(registerEndpoint, (req, res) => {
    const body = req.body;
    const { error, value } = registerGetValidator.validate(req.body);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res.json({ status: "error", errorMessage: error.details });
    } else {
      client
        .query(selectLostByRefnum, [body.refnum])
        .then((queryRes) => {
          if (queryRes.rowCount === 0) {
            res.json({ status: "error", errorMessage: "unknown refnum" });
          } else {
            res.json({ status: "success", data: queryRes.rows });
          }
        })
        .catch((e) => {
          console.error(e);
          res.json({
            status: "error",
            errorMessage:
              "invalid values for category, subcategory, line or color",
          });
        });
    }
  });

  app.post(registerEndpoint, (req, res) => {
    const body = req.body;
    const { error, value } = registerPostValidator.validate(body);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res.json({ status: "error", errorMessage: error.details });
    } else {
      const refnum = uuidv4();
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
              console.log(queryResult.rowCount != 0);
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
                body.time,
                body.from,
                body.to,
                lineId,
                colorId,
                categoryId,
                subCategoryId,
                statusId,
                refnum,
              ])
              .then((queryRes) => {
                res.json({ status: "success", body });
                //TODO send confirmation email or sms
                //TODO determine possible errors
              })
              .catch((e) => {
                console.error(e.stack);
                res.json({
                  status: "error",
                  errorMessage: "unknown database error",
                });
              });
          } else {
            res.json({
              status: "error",
              errorMessage:
                "invalid values for category, subcategory, line or color",
            });
          }
          //TODO determine possible errors, status code 500?
        })
        .catch((e) => {
          console.error(e.stack);
          res.json({ status: "error", errorMessage: "unknown database error" });
        });
    }
  });

  app.put(registerEndpoint, (req, res) => {});

  app.delete(registerEndpoint, (req, res) => {});
};
