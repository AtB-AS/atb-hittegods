import express, { query, Request, Response } from "express";
import pg = require("pg");
import { isAuthenticated } from "./auth/utils";
import {
  foundDetailsGetValidator,
  foundGetValidator,
  foundPostValidator,
  lostDetailsGetValidator,
  lostGetValidator,
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
  selectFoundDetails,
  selectLostDetails,
} from "./queries";
import { dbError, getMatches, RemoveDuplicates, compare } from "./util";

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  //TODO refactor this!
  app.get(
    "/api/admin/lost",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = lostGetValidator.validate(req.query);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const from = req.query.from;
        const to = req.query.to;
        getStatusId("Mistet", { client })
          .then((queryResult) => {
            if (queryResult.rowCount != 0) {
              const statusid = queryResult.rows[0].statusid;
              client
                .query(selectAllLost, [statusid])
                .then((queryResult) => {
                  const matches: any = getMatches(queryResult.rows);
                  const uniqueRows = RemoveDuplicates(
                    queryResult.rows,
                    "lostid"
                  );
                  uniqueRows.sort(compare);
                  const data: any = { items: [] };
                  if (from != undefined && to != undefined) {
                    const fromInt = +from;
                    let toInt = +to;
                    if (uniqueRows.length >= fromInt) {
                      if (toInt > uniqueRows.length) {
                        toInt = uniqueRows.length;
                      }
                      for (let i = 0; i < toInt; i++) {
                        const item = {
                          id: uniqueRows[i].lostid,
                          name: uniqueRows[i].name,
                          subcategory: uniqueRows[i].subcategory,
                          description: uniqueRows[i].description,
                          matchCount: matches[uniqueRows[i].lostid][0],
                          newMatchCount: matches[uniqueRows[i].lostid][1],
                        };
                        data.items.push(item);
                      }
                    }
                  }
                  res.json({ status: "success", data: data });
                })
                .catch((e) => {
                  dbError(e, res);
                });
            } else {
              console.error("Mistet not in status table");
              res.json({
                status: "error",
                errorMessage: "Unknown database error",
              });
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      }
    }
  );

  app.get(
    "/api/admin/lostDetails",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = lostDetailsGetValidator.validate(req.query);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const lostid = req.query.id;
        client
          .query(selectLostDetails, [lostid])
          .then((queryResult) => {
            if (queryResult.rowCount != 0) {
              const foundIDs: Array<number> = [];
              queryResult.rows.forEach((row) => {
                if (row.foundid != null) {
                  if (!foundIDs.includes(row.foundid)) {
                    foundIDs.push(row.foundid);
                  }
                }
              });
              if (foundIDs.length != 0) {
                let query = selectFoundDetails;
                for (let i = 1; i < foundIDs.length; i++) {
                  query += ` or found.foundid=$${i + 1}`;
                }
                client
                  .query(query, foundIDs)
                  .then((foundQueryResult) => {
                    const row = queryResult.rows[0];
                    foundQueryResult.rows.forEach((row) => {
                      //TODO: fix
                      delete row.matchId;
                      delete row.lostId;
                    });
                    const responseJson = {
                      status: "success",
                      data: {
                        id: queryResult.rows[0].lostid,
                        name: row.name,
                        email: row.email,
                        phone: row.phone,
                        description: row.description,
                        brand: row.brand,
                        date: row.date,
                        line: row.line,
                        color: row.color,
                        category: row.category,
                        subcategory: row.subcategory,
                        status: row.status,
                        matches: foundQueryResult.rows,
                      },
                    };
                    res.json(responseJson);
                  })
                  .catch((e) => {
                    dbError(e, res);
                  });
              } else {
                const row = queryResult.rows[0];
                const responseJson = {
                  status: "success",
                  data: {
                    id: queryResult.rows[0].lostid,
                    name: row.nameonitem,
                    email: row.emailonitem,
                    phoneNumber: row.phonenumberonitem,
                    description: row.description,
                    brand: row.brand,
                    date: row.date,
                    line: row.line,
                    color: row.color,
                    category: row.category,
                    subcategory: row.subcategory,
                    status: row.status,
                    matches: [],
                  },
                };
                res.json(responseJson);
              }
            } else {
              res
                .status(404)
                .json({ status: "error", errorMessage: "id not found" });
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
                  //Check if succesful. if rows returned > 0
                  res.json({ status: "success", data: req.body });
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

  app.delete(
    "/api/admin/match",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = matchDeleteValidator.validate(req.body);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const foundid = parseInt(req.body.foundid);
        const lostid = parseInt(req.body.lostid);
        client
          .query(deleteConfirmedMatch, [lostid, foundid])
          .then((queryResult) => {
            if (queryResult.rowCount > 0) {
              res.json({ status: "success", data: req.body });
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

  app.get(
    "/api/admin/found",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = foundGetValidator.validate(req.query);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const from = req.query.from;
        const to = req.query.to;
        getStatusId("Funnet", { client })
          .then((queryResult) => {
            if (queryResult.rowCount != 0) {
              const statusid = queryResult.rows[0].statusid;
              client
                .query(selectAllFound, [statusid])
                .then((queryResult) => {
                  const matches: any = getMatches(queryResult.rows);
                  const uniqueRows = RemoveDuplicates(
                    queryResult.rows,
                    "foundid"
                  );
                  uniqueRows.sort(compare);
                  const data: any = { items: [] };
                  if (from != undefined && to != undefined) {
                    const fromInt = +from;
                    let toInt = +to;
                    if (uniqueRows.length >= fromInt) {
                      if (toInt > uniqueRows.length) {
                        toInt = uniqueRows.length;
                      }
                      for (let i = 0; i < toInt; i++) {
                        const item = {
                          id: uniqueRows[i].foundid,
                          name: uniqueRows[i].name,
                          subcategory: uniqueRows[i].subcategory,
                          description: uniqueRows[i].description,
                          matchCount: matches[uniqueRows[i].lostid][0],
                          newMatchCount: matches[uniqueRows[i].lostid][1],
                        };
                        data.items.push(item);
                      }
                    }
                  }
                  res.json({ status: "success", data: data });
                })
                .catch((e) => {
                  dbError(e, res);
                });
            } else {
              console.error("Mistet not in status table");
              res.json({
                status: "error",
                errorMessage: "Unknown database error",
              });
            }
          })
          .catch((e) => {
            dbError(e, res);
          });
      }
    }
  );

  app.get(
    "/api/admin/foundDetails",
    isAuthenticated,
    async (req: Request, res: Response) => {
      const { error, value } = foundDetailsGetValidator.validate(req.query);
      if (error != undefined) {
        //TODO figure out if error message leaks server information
        res
          .status(400)
          .json({ status: "error", errorMessage: error.details[0].message });
      } else {
        const foundid = req.query.id;
        client
          .query(selectFoundDetails, [foundid])
          .then((queryResult) => {
            if (queryResult.rowCount != 0) {
              const lostIDs: Array<number> = [];
              queryResult.rows.forEach((row) => {
                if (row.lostid != null) {
                  if (!lostIDs.includes(row.lostid)) {
                    lostIDs.push(row.lostid);
                  }
                }
              });
              if (lostIDs.length != 0) {
                let query = selectLostDetails;
                for (let i = 1; i < lostIDs.length; i++) {
                  query += ` or lost.lostid=$${i + 1}`;
                }
                client
                  .query(query, lostIDs)
                  .then((lostQueryResult) => {
                    const row = queryResult.rows[0];
                    lostQueryResult.rows.forEach((row) => {
                      //TODO: fix
                      delete row.matchId;
                      delete row.lostid;
                    });
                    const responseJson = {
                      status: "success",
                      data: {
                        id: queryResult.rows[0].foundid,
                        name: row.name,
                        email: row.email,
                        phone: row.phone,
                        description: row.description,
                        brand: row.brand,
                        date: row.date,
                        line: row.line,
                        color: row.color,
                        category: row.category,
                        subcategory: row.subcategory,
                        status: row.status,
                        matches: lostQueryResult.rows,
                      },
                    };
                    res.json(responseJson);
                  })
                  .catch((e) => {
                    dbError(e, res);
                  });
              } else {
                const row = queryResult.rows[0];
                const responseJson = {
                  status: "success",
                  data: {
                    id: row.foundid,
                    name: row.nameonitem,
                    email: row.emailonitem,
                    phoneNumber: row.phonenumberonitem,
                    description: row.description,
                    brand: row.brand,
                    date: row.date,
                    line: row.line,
                    color: row.color,
                    category: row.category,
                    subcategory: row.subcategory,
                    status: row.status,
                    matches: [],
                  },
                };
                res.json(responseJson);
              }
            } else {
              res
                .status(404)
                .json({ status: "error", errorMessage: "id not found" });
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

  app.get("/api/admin/line", isAuthenticated, (req, res) => {
    client
      .query("select line from line")
      .then((queryResult) => {
        const lines: Array<string> = [];
        queryResult.rows.forEach((row) => {
          lines.push(row.line);
        });
        res.json({ status: "success", data: { lines: lines } });
      })
      .catch((e) => {
        dbError(e, res);
      });
  });
};
