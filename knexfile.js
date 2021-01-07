const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

const customConfig = {
  development: {
    connection: {
      database: "address_book",
      // user,
      // password
    },
  },
  test: {
    connection: {
      database: "address_book",
      // user,
      // password
    },
  },
};

module.exports = { ...customConfig[ENV], ...baseConfig };
