const contactsRouter = require("express").Router();
const {
  getAllContacts,
  patchContact,
  postNewContacts,
  deleteContact,
} = require("../controllers/contacts.controller");
const { handle405Errors } = require("../error_handlers/index");

contactsRouter
  .route("/")
  .get(getAllContacts)
  .post(postNewContacts)
  .patch(patchContact)
  .delete(deleteContact)
  .all(handle405Errors);

module.exports = contactsRouter;
