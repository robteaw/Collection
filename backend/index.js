const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mongooses = require("mongoose");

mongoose.connect(
  "mongodb+srv://<user>:<password>@robauth.xxz0u.mongodb.net/test"
);

app.listen(3001, () => {
  console.log("Server running!");
});
