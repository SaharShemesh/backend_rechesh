const fs = require("fs");

module.exports = {
  development: {
    storage: "../dummyDb/rechesh_database.sqlite",
    dialect: "sqlite",
    logging: false,
    timestamps: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};