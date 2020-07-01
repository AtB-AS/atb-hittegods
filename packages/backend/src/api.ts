import express from "express";
import pg = require("pg");
import {
  registerGetValidator,
  registerPostValidator,
  registerPutValidator,
} from "./validators/registerValidator";
import { registerPutStatusValidator } from "./validators/statusValidator";
import { v4 as uuidv4 } from "uuid";
import {
  getColorId,
  getLineId,
  getSubCategoryId,
  getCategoryId,
  getStatusId,
} from "./db";
import {
  selectLostByRefnum,
  insertNewLost,
  updateStatusUserDelete,
  updateLost,
} from "./queries";

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
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      client
        .query(selectLostByRefnum, [body.refnum])
        .then((queryRes) => {
          if (queryRes.rowCount === 0) {
            res
              .status(404)
              .json({ status: "error", errorMessage: "unknown refnum" });
          } else {
            res.json({ status: "success", data: queryRes.rows });
          }
        })
        .catch((e) => {
          console.error(e);
          res.status(500).json({
            status: "error",
            errorMessage: "Unknown database error",
          });
        });
    }
  });

  app.post(registerEndpoint, (req, res) => {
    const body = req.body;
    const { error, value } = registerPostValidator.validate(body);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(500)
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
                res.json({ status: "success", body });
                //TODO send confirmation email or sms
                //TODO determine possible errors
              })
              .catch((e) => {
                console.error(e.stack);
                res.status(500).json({
                  status: "error",
                  errorMessage: "unknown database error",
                });
              });
          } else {
            res.json({
              status: "error",
              errorMessage:
                "invalid values for category, subcategory, line or color",
              tempErrorTest: data,
            });
          }
        })
        .catch((e) => {
          console.error(e.stack);
          res
            .status(500)
            .json({ status: "error", errorMessage: "unknown database error" });
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
                res.json({ status: "success", body });
                //TODO determine possible errors
              })
              .catch((e) => {
                console.error(e.stack);
                res.status(500).json({
                  status: "error",
                  errorMessage: "Unknown database error",
                });
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
          console.error(e.stack);
          res
            .status(500)
            .json({ status: "error", errorMessage: "Unknown database error" });
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
                res.json({ status: "success", data: { refnum: refnum } });
              })
              .catch((e) => {
                console.error(e.stack);
                //TODO closer look at this error. More things than wrong refnum might cause an error
                res.json({
                  status: "error",
                  errorMessage: "unknown refnr error",
                });
              });
          } else {
            console.log("no Slettet av reisende in database");
            res.json({
              status: "error",
              errorMessage: "unknown database error",
            });
          }
        })
        .catch((e) => {
          console.error(e.stack);
          res.json({ status: "error", errorMessage: "unknown database error" });
        });
    }
  });
};
