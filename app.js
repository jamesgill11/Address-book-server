const express = require("express");

const app = express();
const cors = require("cors");
const apiRouter = require("./routes/api.router");

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.all("/*", (req, res, next) => {
  next({ status: 404, msg: "Route not found" });
});

module.exports = app;
