const knex = require("../db/connection.js");

exports.fetchAllContacts = () => {
  return knex.select("*").from("contacts");
};

exports.postContact = (newContact) => {
  const newData = {
    id: newContact.id,
    first_name: newContact.first_name,
    last_name: newContact.last_name,
    phone: newContact.phone,
    email: newContact.email,
  };
  return knex
    .insert(newData)
    .into("contacts")
    .returning("*")
    .then((result) => {
      return result;
    });
};

exports.patchAContact = (id, first_name, last_name, phone, email) => {
  return knex("contacts")
    .where("id", "=", id)
    .modify((input) => {
      if ((first_name, last_name, phone, email))
        input.update({ first_name, last_name, phone, email });
    })
    .returning("*")
    .then((res) => {
      return res[0];
    });
};

exports.removeContact = (id) => {
  return knex("contacts")
    .where("id", id)
    .del()
    .then((res) => {
      if (res === 0)
        return Promise.reject({ status: 404, msg: "404 Error: Not Found" });
      return res;
    });
};
