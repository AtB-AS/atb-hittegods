import express = require("express");
import dotenv = require("dotenv");
import bodyParser = require("body-parser");
import cors = require("cors");
import apiRoutes from "./api";
import pg = require("pg");
import path from "path";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
//TODO imporve structure by putting db code somewhere else
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: false,
};
const client = new pg.Client(config);

async function startServer() {
  app.use(cors());

  app.use(express.static("grizzly"));
  app.use(express.static("admin"));

  app.use("/", (req, res) => {
    // serve index.html far grizzly
    res.sendFile(path.join(__dirname + "/grizzly/index.html"));
  });

  app.use("/admin", (req, res) => {
    // serve index.html fra admin
    res.sendFile(path.join(__dirname + '/admin/index.html'));
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  await apiRoutes({ app }, { client });
  app.listen(port);
  console.log("Server running");
}

startServer();

client.connect((err) => {
  if (err) throw err;
  else {
    console.log("Database connected");
  }
});
