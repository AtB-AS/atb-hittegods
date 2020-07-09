import express, { query, Request, Response } from "express";
import pg = require("pg");
import {
  registerGetValidator,
  registerPostValidator,
  registerPutValidator,
} from "./validators/registerValidator";
import { registerPutStatusValidator } from "./validators/statusValidator";
import {
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
} from "./queries";
import { isAuthenticated } from "./auth/utils";

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
                  console.log(matches);
                  const uniqueRows = RemoveDuplicates(
                    queryResult.rows,
                    "lostid"
                  );
                  uniqueRows.sort(compare);
                  console.log(uniqueRows);
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
                    console.log(data);
                  }
                  res.json({ status: "success", data: data });
                })
                .catch((e) => {
                  dbError(e, res);
                });
            } else {
              console.log("Mistet not in status table");
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
                  query += ` or foundid=$${i + 1}`;
                }
                client
                  .query(query, foundIDs)
                  .then((foundQueryResult) => {
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
};

const compare = (a: any, b: any) => {
  if (a.lostid < b.lostid) {
    return 1;
  }
  if (a.lostid > b.lostid) {
    return -1;
  }
  return 0;
};

const RemoveDuplicates = (array: any, key: any) => {
  return array.reduce((arr: any, item: any) => {
    const removed = arr.filter((i: any) => i[key] !== item[key]);
    return [...removed, item];
  }, []);
};

const getMatches = (rows: any) => {
  const matches: any = {};
  rows.forEach((row: any) => {
    const lostid = row.lostid;
    if (matches[lostid] != undefined) {
      if (row.matchid != null) {
        matches[lostid][0] += 1;
        if (row.new === true) {
          matches[lostid][1] += 1;
        }
      }
    } else {
      matches[lostid] = [0, 0];
      if (row.matchid != null) {
        matches[lostid][0] += 1;
        if (row.new === true) {
          matches[lostid][1] += 1;
        }
      }
    }
  });
  return matches;
};

const dbError = (e: Error, res: Response) => {
  console.error(e.stack);
  res.status(500).json({
    status: "error",
    errorMessage: "Unknown database error",
  });
};
