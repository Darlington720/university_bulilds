const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const cors = require("cors");

var { baseIp, port, database } = require("./config");

const fileUpload = require("express-fileupload");

const app = express();
const secret = "mySecret";

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use(fileUpload());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan Enabled...");
}

app.use(express.static(path.join(__dirname, "dist")));

app.listen(port, baseIp, () => console.log(`App is running on port ${port}`));
