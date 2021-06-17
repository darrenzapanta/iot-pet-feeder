const express = require("express");
const app = express();
const iotFeeder = require("./routes/iotFeeder");
const mongoose = require("mongoose");
const config = require("config");

const uri = config.get("db");

mongoose
  .connect(uri)
  .then(() => console.log(`Connected to ${uri}...`))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.use(express.json());
app.use("/api/iot-feeder", iotFeeder);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
