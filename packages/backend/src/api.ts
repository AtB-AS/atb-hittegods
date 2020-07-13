import express, { query, Request, Response } from "express";
import pg = require("pg");
import {
  registerGetValidator,
  registerPostValidator,
  registerPutValidator,
} from "./validators/registerValidator";
import { registerPutStatusValidator } from "./validators/statusValidator";
import {
  foundDetailsGetValidator,
  foundGetValidator,
  foundPostValidator,
  lostDetailsGetValidator,
  lostGetValidator,
  matchDeleteValidator,
  matchPostValidator,
} from "./validators/adminValidator";
import { v4 as uuidv4 } from "uuid";
import {
  getColorId,
  getLineId,
  getSubCategoryId,
  getCategoryId,
  getStatusId,
  getFoundId,
  getLostId,
} from "./db";
import {
  selectLostByRefnum,
  insertNewLost,
  updateStatusUserDelete,
  updateLost,
  selectAllLost,
  selectLostDetails,
  selectFoundDetails,
  insertConfirmedMatch,
  deleteConfirmedMatch,
  selectAllFound,
  insertNewFound,
} from "./queries";
import { isAuthenticated } from "./auth/utils";
import https = require("https");
import { dbError } from "./util";

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  const registerEndpoint = "/api/register";

  app.get(registerEndpoint, (req, res) => {
    const query = req.query;
    const { error, value } = registerGetValidator.validate(req.query);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      client
        .query(selectLostByRefnum, [query.refnum])
        .then((queryRes) => {
          if (queryRes.rowCount === 0) {
            res
              .status(404)
              .json({ status: "error", errorMessage: "Unknown refnum" });
          } else {
            res.json({ status: "success", data: queryRes.rows[0] });
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.post(registerEndpoint, (req, res) => {
    const body = req.body;
    const { error, value } = registerPostValidator.validate(body);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
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
                //TODO check that response is compliant with api docs
                //fetch request to
                res.json({ status: "success", data: body });
                const lostid = queryRes.rows[0].lostid;
                const url =
                  "https://hittegods-matchmaker.azurewebsites.net/lost/" +
                  lostid;
                console.log("Notify new lost to hittegods-matchmaker : " + url);
                https
                  .get(url, (httpsRes) => {
                    httpsRes.setEncoding("utf8");
                    let body = "";
                    httpsRes.on("data", (data) => {
                      body += data;
                      console.log("Response from matchmaker : " + data);
                    });
                    httpsRes.on("end", () => {
                      console.log("hittegods-matchmaker : " + body);
                    });
                  })
                  .on("error", (error) => {
                    console.log("matchmaker error : " + error);
                  });
                //TODO send confirmation email or sms
                //TODO determine possible errors
              })
              .catch((e) => {
                dbError(e, res);
              });
          } else {
            res.status(400).json({
              status: "error",
              errorMessage:
                "invalid values for category, subcategory, line or color",
            });
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.put(registerEndpoint, (req, res) => {
    const body = req.body;
    const { error, value } = registerPutValidator.validate(body);
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
      Promise.all([
        categoryIdPromise,
        subCategoryIdPromise,
        lineIdPromise,
        colorIdPromise,
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
            client
              .query(updateLost, [
                body.description,
                body.brand,
                body.date,
                body.from,
                body.to,
                lineId,
                colorId,
                categoryId,
                subCategoryId,
                body.refnum,
              ])
              .then((queryRes) => {
                if (queryRes.rowCount != 0) {
                  //TODO check that response is compliant with api docs
                  res.json({ status: "success", data: body });
                } else {
                  res.status(404).json({
                    status: "error",
                    errorMessage: "Unknown refnum",
                  });
                }
              })
              .catch((e) => {
                dbError(e, res);
              });
          } else {
            res.status(400).json({
              status: "error",
              errorMessage:
                "Invalid values for category, subcategory, line or color",
            });
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.put("/api/updateStatus", (req, res) => {
    const refnum = req.body.refnum;
    const { error, value } = registerPutStatusValidator.validate(req.body);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      getStatusId("Slettet av reisende", { client })
        .then((queryResult) => {
          if (queryResult.rowCount != 0) {
            const statusid = queryResult.rows[0].statusid;
            client
              .query(updateStatusUserDelete, [statusid, refnum])
              .then((queryRes) => {
                if (queryRes.rowCount != 0) {
                  res.json({ status: "success", data: { refnum: refnum } });
                } else {
                  res.status(404).json({
                    status: "error",
                    errorMessage: "Unknown refnum",
                  });
                }
              })
              .catch((e) => {
                dbError(e, res);
              });
          } else {
            console.error("no Slettet av reisende in database");
            res.status(500).json({
              status: "error",
              errorMessage: "Unknown database error",
            });
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.get("/api/line", (req: Request, res: Response) => {
    client
      .query("select line from line")
      .then((queryResult) => {
        const lines: Array<string> = [];
        queryResult.rows.forEach((row) => {
          if (row.line != "") {
            lines.push(row.line);
          }
        });
        res.json({ status: "success", data: { lines: lines } });
      })
      .catch((e) => {
        dbError(e, res);
      });
  });
};
