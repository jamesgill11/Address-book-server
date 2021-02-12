const contactsData = require("../data/index");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("contacts").insert(contactsData).returning("*");
    });
};
