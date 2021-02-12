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
  console.log(id);
  return knex("contacts")
    .where("id", "=", id)
    .modify((input) => {
      if ((first_name, last_name, phone, email))
        input.update({ first_name, last_name, phone, email });
    })
    .returning("*")
    .then((res) => {
      const [updatedChild] = res;
      return updatedChild;
    });
};

exports.removeContact = (id) => {
  return knex("contacts").where("id", id).del();
};
