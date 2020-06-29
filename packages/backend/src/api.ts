import express from "express";
import pg = require("pg");
import {
  registerGetValidator,
  registerPostValidator,
} from "./validators/registerValidator";
import { v4 as uuidv4 } from "uuid";
import { getColorId, getLineId, getSubCategoryId, getCategoryId } from "./db";

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
      const selectQuery = "select * from mistet where refnr=$1";
      client.query(selectQuery, [body.refnum]).then((queryRes) => {
        if (queryRes.rowCount === 0) {
          res.json({ status: "error", errorMessage: "unknown refnum" });
        } else {
          res.json({ status: "success", data: queryRes.rows });
        }
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
      /*const categoryIdPromise = getCategoryId(req.body.category, { client });
      const subCategoryIdPromise = getSubCategoryId(req.body.subCategory, {
        client,
      });
      const lineIdPromise = getLineId(req.body.line, { client });
      const colorIdPromise = getColorId(req.body.color, { client });*/
      Promise.all([1, 1, 1, 1])
        .then((data) => {
          //TODO: validate category, subcat, line, color against database tables. Error if they do not exist in database
          if (1 == 1) {
            //TODO fix query
            const insertQuery =
              "insert into mistet (navn, epost, refnr) values ($1, $2, $3)";
            client
              .query(insertQuery, [body.name, body.email, refnum])
              .then((queryRes) => {
                res.json({ status: "success", body });
                //TODO determine possible errors
              })
              .catch(() => {
                res.json({
                  status: "error",
                  errorMessage: "unknown database error",
                });
              });
          }
          //TODO determine possible errors
        })
        .catch(() => {
          res.json({ status: "error", errorMessage: "unknown database error" });
        });
    }
  });

  app.put(registerEndpoint, (req, res) => {});

  app.delete(registerEndpoint, (req, res) => {});
};
