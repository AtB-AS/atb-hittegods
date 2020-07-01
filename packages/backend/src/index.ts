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

  // static resources, like images and js from both grizzly and admin builds
  app.use(express.static("grizzly"));
  app.use(express.static("admin"));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Serving grizzly frontend
  app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd() + "/grizzly/index.html"));
  });

  // Serving admin frontend
  app.get("/admin", (req, res) => {
    res.sendFile(path.join(process.cwd() + "/admin/index.html"));
  });

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
