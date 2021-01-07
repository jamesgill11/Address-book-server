const apiRouter = require("express").Router();
const contactsRouter = require("./contacts.router");

apiRouter.use("/contacts", contactsRouter);

module.exports = apiRouter;
