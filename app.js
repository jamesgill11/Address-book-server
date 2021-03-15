const express = require("express");

const app = express();
const cors = require("cors");
const apiRouter = require("./routes/api.router");
const {
  customErrorHandler,
  handlePSQLErrors,
  handle405Errors,
  handleServerErrors,
} = require("./error_handlers/index");

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
  next({ status: 404, msg: "Route not found" });
});

app.use(customErrorHandler);
app.use(handlePSQLErrors);
app.use(handle405Errors);
app.use(handleServerErrors);

module.exports = app;
