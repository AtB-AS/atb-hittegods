import express, { query, Request, Response } from "express";
import pg = require("pg");
import { isAuthenticated } from "./auth/utils";
import {
  foundGetValidator,
  foundIdGetValidator,
  foundPostValidator,
  foundPutBodyValidator,
  foundPutParamValidator,
  lostGetValidator,
  lostIdGetValidator,
  matchDeleteValidator,
  matchPostValidator,
} from "./validators/adminValidator";
import {
  getCategoryId,
  getColorId,
  getFoundId,
  getLineId,
  getLostId,
  getStatusId,
  getSubCategoryId,
} from "./db";
import {
  deleteConfirmedMatch,
  insertConfirmedMatch,
  insertNewFound,
  selectAllFound,
  selectAllLost,
  selectConfirmedMatches,
  selectFoundById,
  selectLostById,
  updateFound,
} from "./queries";
import { dbError, getMatches, RemoveDuplicates, compare } from "./util";

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  app.get("/api/admin/lost", isAuthenticated, (req: Request, res: Response) => {
    const { error, value } = lostGetValidator.validate(req.query);
    //TODO
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      if (
        req.query.status != undefined &&
        typeof req.query.status == "string"
      ) {
        const status: string = req.query.status;
        getStatusId(status, { client })
          .then((statusRes) => {
            if (statusRes.rowCount > 0) {
              const statusid = statusRes.rows[0].statusid;
              client
                .query(selectAllLost, [statusid])
                .then((queryResult) => {
                  const matches: any = getMatches(queryResult.rows);
                  const uniqueRows = RemoveDuplicates(
                    queryResult.rows,
                    "lostid"
                  );
                  const foundids: any = {};
                  queryResult.rows.forEach((row) => {
                    if (foundids[row.lostid] == undefined) {
                      foundids[row.lostid] = [];
                    }
                    if (row.foundid != null) {
                      foundids[row.lostid].push(row.foundid);
                    }
                  });
                  uniqueRows.sort(compare);
                  const data: any = { items: [] };
                  for (let i = 0; i < uniqueRows.length; i++) {
                    const item = {
                      id: uniqueRows[i].lostid,
                      name: uniqueRows[i].name,
                      phone: uniqueRows[i].phone,
                      email: uniqueRows[i].email,
                      category: uniqueRows[i].category,
                      subcategory: uniqueRows[i].subcategory,
                      color: uniqueRows[i].color,
                      status: uniqueRows[i].status,
                      date: uniqueRows[i].date,
                      brand: uniqueRows[i].brand,
                      refnr: uniqueRows[i].refnr,
                      line: uniqueRows[i].line,
                      description: uniqueRows[i].description,
                      matchCount: matches[uniqueRows[i].lostid][0],
                      newMatchCount: matches[uniqueRows[i].lostid][1],
                      foundids: foundids[uniqueRows[i].lostid],
                    };
                    data.items.push(item);
                  }
                  res.json({ status: "success", data: data });
                })
                .catch((e) => {
                  dbError(e, res);
                });
            } else {
              res
                .status(404)
                .json({ status: "error", errorMessage: "unknown status" });
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      } else {
        res.json({ status: "error", errorMessage: "invalid status" });
      }
    }
  });

  app.get(
    "/api/admin/lost/:id",
    isAuthenticated,
    (req: Request, res: Response) => {
      const { error, value } = lostIdGetValidator.validate(req.params);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const id = req.params.id;

        client
          .query(selectLostById, [id])
          .then((queryResult) => {
            if (queryResult.rowCount > 0) {
              const row = queryResult.rows[0];
              const matches: any = getMatches(queryResult.rows);
              const foundids: any = {};
              queryResult.rows.forEach((row) => {
                if (foundids[row.lostid] == undefined) {
                  foundids[row.lostid] = [];
                }
                if (row.foundid != null) {
                  foundids[row.lostid].push(row.foundid);
                }
              });

              const item = {
                id: row.lostid,
                name: row.name,
                phone: row.phone,
                email: row.email,
                category: row.category,
                subcategory: row.subcategory,
                color: row.color,
                status: row.status,
                date: row.date,
                brand: row.brand,
                line: row.line,
                refnr: row.refnr,
                description: row.description,
                matchCount: matches[row.lostid][0],
                newMatchCount: matches[row.lostid][1],
                foundids: foundids[row.lostid],
              };
              res.json({ status: "success", data: item });
            } else {
              res
                .status(404)
                .json({ status: "error", errorMessage: "Unknown id" });
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      }
    }
  );

  app.get(
    "/api/admin/found",
    isAuthenticated,
    (req: Request, res: Response) => {
      const { error, value } = foundGetValidator.validate(req.query);
      //TODO
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        if (
          req.query.status != undefined &&
          typeof req.query.status == "string"
        ) {
          const status: string = req.query.status;
          getStatusId(status, { client })
            .then((statusRes) => {
              if (statusRes.rowCount > 0) {
                const statusid = statusRes.rows[0].statusid;
                client
                  .query(selectAllFound, [statusid])
                  .then((queryResult) => {
                    const data: any = { items: [] };
                    queryResult.rows.forEach((row) => {
                      const item = {
                        id: row.foundid,
                        name: row.name,
                        phone: row.phone,
                        email: row.email,
                        category: row.category,
                        subcategory: row.subcategory,
                        color: row.color,
                        status: row.status,
                        date: row.date,
                        brand: row.brand,
                        description: row.description,
                        line: row.line,
                      };
                      data.items.push(item);
                    });
                    res.json({ status: "success", data: data });
                  })
                  .catch((e) => {
                    dbError(e, res);
                  });
              } else {
                res
                  .status(404)
                  .json({ status: "error", errorMessage: "unknown status" });
              }
            })
            .catch((e) => {
              dbError(e, res);
            });
        } else {
          res.json({ status: "error", errorMessage: "invalid status" });
        }
      }
    }
  );

  app.get(
    "/api/admin/found/:id",
    isAuthenticated,
    (req: Request, res: Response) => {
      const { error, value } = foundIdGetValidator.validate(req.params);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const id = req.params.id;

        client
          .query(selectFoundById, [id])
          .then((queryResult) => {
            if (queryResult.rowCount > 0) {
              const row = queryResult.rows[0];
              const data = {
                id: row.foundid,
                name: row.name,
                phone: row.phone,
                email: row.email,
                category: row.category,
                subcategory: row.subcategory,
                color: row.color,
                status: row.status,
                date: row.date,
                brand: row.brand,
                description: row.description,
                line: row.line,
              };
              res.json({ status: "success", data: data });
            } else {
              res
                .status(404)
                .json({ status: "error", errorMessage: "Unknown id" });
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      }
    }
  );

  app.post(
    "/api/admin/match",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = matchPostValidator.validate(req.body);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const foundid = parseInt(req.body.foundid);
        const lostid = parseInt(req.body.lostid);
        const foundidPromise = getFoundId(foundid, { client });
        const lostidPromise = getLostId(lostid, { client });
        Promise.all([foundidPromise, lostidPromise])
          .then((data) => {
            const validFoundid = data[0].rowCount > 0;
            const validLostid = data[1].rowCount > 0;
            if (validFoundid && validLostid) {
              //TODO check for duplicates
              client
                .query(insertConfirmedMatch, [lostid, foundid])
                .then((queryresult) => {
                  res.json({ status: "success", data: queryresult.rows[0] });
                })
                .catch((e) => {
                  if (e.message.includes("confirmedmatch_foundid_key")) {
                    res.status(409).json({
                      status: "error",
                      errorMessage: "foundid already has a match",
                    });
                  } else if (e.message.includes("confirmedmatch_lostid_key")) {
                    res.status(409).json({
                      status: "error",
                      errorMessage: "lostid already has a match",
                    });
                  } else {
                    dbError(e, res);
                  }
                });
            } else {
              if (validLostid) {
                res
                  .status(404)
                  .json({ status: "error", errorMessage: "Unknown foundid" });
              } else {
                res
                  .status(404)
                  .json({ status: "error", errorMessage: "Unknown lostid" });
              }
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      }
    }
  );

  app.get(
    "/api/admin/match",
    isAuthenticated,
    async (req: Request, res: Response) => {
      client
        .query(selectConfirmedMatches)
        .then((queryResult) => {
          res.json({ status: "success", data: { matches: queryResult.rows } });
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  );

  app.delete(
    "/api/admin/match/:id",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = matchDeleteValidator.validate(req.params);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const id = req.params.id;
        client
          .query(deleteConfirmedMatch, [id])
          .then((queryResult) => {
            if (queryResult.rowCount > 0) {
              res.json({ status: "success", data: queryResult.rows[0] });
            } else {
              res.status(404).json({
                status: "error",
                errorMessage: "match not found",
              });
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      }
    }
  );

  app.post("/api/admin/found", isAuthenticated, async (req, res) => {
    const body = req.body;
    const { error, value } = foundPostValidator.validate(body);
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
      const statusIdPromise = getStatusId("Funnet", { client });
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
              .query(insertNewFound, [
                body.name,
                body.email,
                body.phone,
                body.description,
                body.brand,
                new Date().toLocaleDateString(),
                lineId,
                colorId,
                categoryId,
                subCategoryId,
                statusId,
                //todo
                null,
                //TODO fix this
                (req.user as any).given_name,
              ])
              .then((queryRes) => {
                //TODO check that response is compliant with api docs
                //fetch request to
                res.json({ status: "success", data: queryRes.rows[0] });
              })
              .catch((e) => {
                dbError(e, res);
              });
          } else {
            res.status(400).json({
              //TODO
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

  app.put("/api/admin/found/:id", isAuthenticated, async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const bodyError = foundPutBodyValidator.validate(body).error;
    const paramError = foundPutParamValidator.validate(req.params).error;
    if (bodyError != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: bodyError.details[0].message });
    } else if (paramError != undefined) {
      res
        .status(400)
        .json({ status: "error", errorMessage: paramError.details[0].message });
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
              .query(updateFound, [
                body.name,
                body.email,
                body.phone,
                body.description,
                body.brand,
                lineId,
                colorId,
                categoryId,
                subCategoryId,
                id,
              ])
              .then((queryRes) => {
                if (queryRes.rowCount > 0) {
                  req.body.foundid = id;
                  res.json({ status: "success", data: req.body });
                } else {
                  res
                    .status(404)
                    .json({ status: "error", errorMessage: "unknown id" });
                }
              })
              .catch((e) => {
                dbError(e, res);
              });
          } else {
            res.status(400).json({
              //TODO
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
};
