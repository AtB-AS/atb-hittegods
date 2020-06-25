import express from "express";
import pg = require("pg");

export default async (
  { app }: { app: express.Application },
  { client }: { client: pg.Client }
) => {
  app.post("/api/insert", (req, res) => {
    //TODO implement this
    const name = req.body.name;
    const quantity = req.body.quantity;
    console.log(name);
    console.log(quantity);
    //TODO figure out proper js validation
    const query = "insert into inventory (name, quantity) values ($1, $2)";
    client
      .query(query, [name, quantity])
      .then((res) => {
        console.log("Insert succesful");
      })
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
        console.error(e.stack);
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
