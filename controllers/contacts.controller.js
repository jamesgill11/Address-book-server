const {
  fetchAllContacts,
  postContact,
  patchAContact,
  removeContact,
} = require("../model/contacts.model");

exports.getAllContacts = (req, res, next) => {
  fetchAllContacts()
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postNewContacts = (req, res, next) => {
  postContact(req.body)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchContact = (req, res, next) => {
  const { id, first_name, last_name, phone, email } = req.body;
  patchAContact(id, first_name, last_name, phone, email)
    .then((contact) => {
      res.json({ msg: "Contact Updated", contact });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteContact = (req, res, next) => {
  const { id } = req.body;
  removeContact(id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      next(err);
    });
};
