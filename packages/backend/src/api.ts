import express from "express";
import pg = require("pg");

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  const registerEndpoint = "/api/register";

  interface LooseObject {
    [key: string]: any;
  }

  app.get(registerEndpoint, (req, res) => {
    const refnum = req.body.refnum;
    const responseJson: LooseObject = {};
    if (refnum == null) {
      responseJson.status = "error";
      responseJson.errorMessage =
        "refnum parameter is required in request body";
    } else {
      //TODO: implement with database
      //TODO: error if refnum is not in database
      responseJson.status = "success";
    }
    res.json(responseJson);
  });

  app.post(registerEndpoint, (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const category = req.body.category;
    const subCategory = req.body.subCategory;
    const line = req.body.line;
    const description = req.body.description;
    const brand = req.body.brand;
    const color = req.body.color;
    const date = req.body.date;
    const to = req.body.to;
    const from = req.body.from;
    //TODO: validate category, subcat, line, color against database tables. Error if they do not exist in database
    //TODO inset data into database
    const responseJson: LooseObject = {};
    responseJson.status = "success";
    res.json(responseJson);
  });

  app.put(registerEndpoint, (req, res) => {
    const refnum = req.body.refnum;
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const category = req.body.category;
    const subCategory = req.body.subCategory;
    const line = req.body.line;
    const description = req.body.description;
    const brand = req.body.brand;
    const color = req.body.color;
    const date = req.body.date;
    const to = req.body.to;
    const from = req.body.from;
    //TODO: validate category, subcat, line, color against database tables. Error if they do not exist in database
    //TODO update data in database
    const responseJson: LooseObject = {};
    if (refnum == null) {
      responseJson.status = "error";
      responseJson.errorMessage =
        "refnum parameter is required in request body";
    } else {
      //TODO: implement with database
      //TODO: error if refnum is not in database
      responseJson.status = "success";
    }
    res.json(responseJson);
  });

  app.delete(registerEndpoint, (req, res) => {
    const refnum = req.body.refnum;
    const responseJson: LooseObject = {};
    if (refnum == null) {
      responseJson.status = "error";
      responseJson.errorMessage =
        "refnum parameter is required in request body";
    } else {
      //TODO: implement with database
      //TODO: error if refnum is not in database
      responseJson.status = "success";
    }
    res.json(responseJson);
  });

  app.post("/api/insert", (req, res) => {
    //TODO implement this
    const name = req.body.name;
    const quantity = req.body.quantity;
    //TODO figure out proper js validation
    const query = "insert into inventory (name, quantity) values ($1, $2)";
    client
      .query(query, [name, quantity])
      .then((res) => {})
      .catch((e) => console.error(e.stack));
    res.send(req.body);
  });

  app.get("/api/list", (req, res) => {
    const query = "select name, quantity from inventory";
    client
      .query(query)
      .then((query_res) => {
        console.log(query_res.rows);
        res.json({
          data: query_res.rows,
        });
      })
      .catch((e) => {
        //TODO better error handling
        res.send("Error");
      });
  });

  app.post("/test", (req, res) => {
    res.send("respons test");
  });
  app.get("/", (req, res) => {
    res.send("An alligator is approaching");
  });
};
