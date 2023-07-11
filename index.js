const express = require("express");
const cors = require("cors");
const indexRouter = require("./routers/index");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);

app.listen(3000, () => console.log("app is listening"));
