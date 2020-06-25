import express = require("express");
import dotenv = require("dotenv");
import bodyParser = require("body-parser");
import cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.use(express.static("build"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/test", (req, res) => {
  console.log(req.body.data);
  res.send("respons test");
});

app.get("/", (req, res) => {
  res.send("An alligator is approaching");
});

/*app.use("/", (req, res) => {
  res.json("Hello World!");
});*/

app.listen(port);

/*import pg = require("pg");


const port = process.env.PORT || 5000;
const app = express();
console.log(process.env.DB_PASSWORD);

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: true,
};
console.log("test");
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

const client = new pg.Client(config);

client.connect((err) => {
  if (err) throw err;
  else {
    queryDatabase();
  }
});

function queryDatabase() {
  const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
    `;

  client
    .query(query)
    .then(() => {
      console.log("Table created successfully!");
      client.end((err) => {
        console.log("disconnect");
      });
    })
    .catch((err) => console.log(err))
    .then(() => {
      console.log("Finished execution, exiting now");
      process.exit();
    });
}
*/
