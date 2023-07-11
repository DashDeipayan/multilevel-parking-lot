const express = require("express");

const app = express();

app.use("/parkingspot", require("./parkingSpot"));
app.use("/vehicle", require("./vehicle"));
app.use("/floor", require("./floors"));

module.exports = app;
