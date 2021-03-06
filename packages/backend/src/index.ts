import express = require("express");
import dotenv = require("dotenv");
import bodyParser = require("body-parser");
import cors = require("cors");
import apiRoutes from "./api";
import adminApi from "./adminApi";
import pg = require("pg");
import path from "path";
import passportSetup from "./auth/init";
import { authRoutes } from "./auth/authApi";
import cookieParser from "cookie-parser";
import session from "express-session";
import pgSession from "connect-pg-simple";
import { setupSchedules } from "./scheduler";
import compression from "compression";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.set("trust proxy", 1);
app.use(compression());
//TODO imporve structure by putting db code somewhere else
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: false,
  query_timeout: 10000,
};
const client = new pg.Client(config);
const pgSessionStore = pgSession(session);

async function startServer() {
  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // cookies
  const pgPool = new pg.Pool(config);
  const oneDay = 60 * 60 * 24 * 1000;
  app.use(cookieParser());
  app.use(
    session({
      store: new pgSessionStore({
        pool: pgPool, // Connection pool
      }),
      name: "hittegods",
      cookie: {
        maxAge: oneDay,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
      secret: "hittegods",
      resave: false,
      saveUninitialized: false,
    })
  );
  await passportSetup({ app });
  app.use("/auth", authRoutes);
  await apiRoutes({ app }, { client });
  await adminApi({ app }, { client });

  // static resources, like images and js from both grizzly and admin builds
  app.use(express.static("grizzly"));

  // Serving grizzly frontend
  app.get("/*", (req, res) => {
    res.sendFile(path.join(process.cwd() + "/grizzly/index.html"));
  });

  app.listen(port);
  console.log("Server running");

  setupSchedules({ client });
}

startServer();

client.connect((err) => {
  if (err) throw err;
  else {
    console.log("Database connected");
  }
});
