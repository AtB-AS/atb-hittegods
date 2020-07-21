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
  lostIdStatusPutBodyValidator,
  lostIdStatusPutParamValidator,
  matchDeleteValidator,
  matchPostValidator,
  possibleMatchGetValidator,
  possibleMatchIdDeleteValidator,
  possibleMatchIdNewPutBodyValidator,
  possibleMatchIdNewPutParamValidator,
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
  deletePossibleMatch,
  insertConfirmedMatch,
  insertNewFound,
  selectAllFound,
  selectAllLost,
  selectConfirmedMatches,
  selectFoundById,
  selectLostById,
  selectPossibleMatches,
  updateFound,
  updateLostStatusById,
  updatePossibleMatchNewById,
} from "./queries";
import https = require("https");
import {
  dbError,
  getMatches,
  RemoveDuplicates,
  compare,
  sendEmail,
} from "./util";
import { foundEmail } from "./emailText";

type Match = {
  matchid: number;
  foundid: number;
  new: boolean;
};

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
                  const matchList: any = {};
                  queryResult.rows.forEach((row) => {
                    if (matchList[row.lostid] == undefined) {
                      matchList[row.lostid] = [];
                    }
                    if (row.foundid != null) {
                      matchList[row.lostid].push({
                        matchid: row.matchid,
                        foundid: row.foundid,
                        new: row.new,
                      });
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
                      matches: matchList[uniqueRows[i].lostid],
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
              const matchList: any = {};
              queryResult.rows.forEach((row) => {
                if (matchList[row.lostid] == undefined) {
                  matchList[row.lostid] = [];
                }
                if (row.foundid != null) {
                  matchList[row.lostid].push({
                    matchid: row.matchid,
                    foundid: row.foundid,
                    new: row.new,
                  });
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
                matches: matchList[row.lostid],
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
                  client
                    .query(selectLostById, [req.body.lostid])
                    .then((queryResult) => {
                      if (queryResult.rowCount > 0) {
                        const row = queryResult.rows[0];
                        sendEmail(
                          row.email,
                          "AtB hittegods",
                          foundEmail(row.name)
                        );
                      }
                    })
                    //TODO
                    .catch();
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
      const statusIdPromise = getStatusId(req.body.status, { client });
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
                const foundid = queryRes.rows[0].foundid;
                const url =
                  "https://hittegods-matchmaker.azurewebsites.net/found/" +
                  foundid;
                console.log(
                  "Notify new found to hittegods-matchmaker : " + url
                );
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
              res.status(400).json({
                status: "error",
                errorMessage: "invalid status",
              });
            }
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
      const statusIdPromise = getStatusId(req.body.status, { client });
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
                statusId,
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
              res.status(400).json({
                status: "error",
                errorMessage: "invalid status",
              });
            }
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.put("/api/admin/lost/:id/status", isAuthenticated, async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const bodyError = lostIdStatusPutBodyValidator.validate(body).error;
    const paramError = lostIdStatusPutParamValidator.validate(req.params).error;
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
      getStatusId(req.body.status, { client })
        .then((statusQueryResult) => {
          if (statusQueryResult.rowCount != 0) {
            const statusId = statusQueryResult.rows[0].statusid;
            client
              .query(updateLostStatusById, [statusId, req.params.id])
              .then((queryResult) => {
                if (queryResult.rowCount > 0) {
                  req.body.foundid = id;
                  res.json({ status: "success", data: { id: req.params.id } });
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
            res
              .status(400)
              .json({ status: "error", errorMessage: "unknown status" });
          }
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.get("/api/admin/possibleMatch", isAuthenticated, (req, res) => {
    const { error, value } = possibleMatchGetValidator.validate(req.query);
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      const queryAnds = [];
      const queryParams = [];
      //All this fancy stuff is done to avoid sqli
      if (req.query.foundid != undefined) {
        queryParams.push(req.query.foundid);
        const paramNumber = queryAnds.length + 1;
        queryAnds.push(`foundid=$${paramNumber}`);
      }
      if (req.query.lostid != undefined) {
        queryParams.push(req.query.lostid);
        const paramNumber = queryAnds.length + 1;
        queryAnds.push(`lostid=$${paramNumber}`);
      }
      let queryAppend = "";
      if (queryAnds.length != 0) {
        queryAppend += "where ";
        let firstRun = true;
        queryAnds.forEach((stringFragment) => {
          if (!firstRun) {
            queryAppend += "and ";
          }
          queryAppend += stringFragment + " ";
          firstRun = false;
        });
      }
      const query = selectPossibleMatches + queryAppend;

      client
        .query(query, queryParams)
        .then((queryResult) => {
          res.json({ status: "success", data: queryResult.rows });
        })
        .catch((e) => {
          dbError(e, res);
        });
    }
  });

  app.delete("/api/admin/possibleMatch/:id", isAuthenticated, (req, res) => {
    const { error, value } = possibleMatchIdDeleteValidator.validate(
      req.params
    );
    if (error != undefined) {
      //TODO figure out if error message leaks server information
      res
        .status(400)
        .json({ status: "error", errorMessage: error.details[0].message });
    } else {
      const id = req.params.id;
      client
        .query(deletePossibleMatch, [id])
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
  });

  app.put(
    "/api/admin/possibleMatch/:id/new",
    isAuthenticated,
    async (req, res) => {
      const body = req.body;
      const id = req.params.id;
      const bodyError = possibleMatchIdNewPutBodyValidator.validate(body).error;
      const paramError = possibleMatchIdNewPutParamValidator.validate(
        req.params
      ).error;
      if (bodyError != undefined) {
        //TODO figure out if error message leaks server information
        res.status(400).json({
          status: "error",
          errorMessage: bodyError.details[0].message,
        });
      } else if (paramError != undefined) {
        res.status(400).json({
          status: "error",
          errorMessage: paramError.details[0].message,
        });
      } else {
        client
          .query(updatePossibleMatchNewById, [body.new, id])
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
};
