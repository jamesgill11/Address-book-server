exports.up = function (knex) {
  console.log("created contacts table");
  return knex.schema.createTable("contacts", (contactsTable) => {
    contactsTable.increments("id").primary();
    contactsTable.string("first_name").notNullable();
    contactsTable.string("last_name").notNullable();
    contactsTable.string("phone").notNullable();
    contactsTable.string("email").notNullable();
  });
};

exports.down = function (knex) {
  console.log("dropping contacts table");
  return knex.schema.dropTable("contacts");
};
