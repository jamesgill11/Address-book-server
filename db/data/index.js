const ENV = process.env.NODE_ENV || "development";
// const testData = require("./test-data");
const contactsData = require("./contacts");

const data = {
  development: contactsData,
  production: contactsData,
};
module.exports = data[ENV];
