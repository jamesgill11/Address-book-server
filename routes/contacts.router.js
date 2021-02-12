const contactsRouter = require("express").Router();
const {
  getAllContacts,
  patchContact,
  postNewContacts,
  deleteContact,
} = require("../controllers/contacts.controller");

contactsRouter
  .route("/")
  .get(getAllContacts)
  .post(postNewContacts)
  .patch(patchContact)
  .delete(deleteContact);
// .all("*");

module.exports = contactsRouter;
