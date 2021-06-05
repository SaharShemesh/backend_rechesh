"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("measurements", [
      {
        measurement: "מטר",
      },
      {
        measurement: "גרם",
      },
      {
        measurement: "קג",
      },
      {
        measurement: "סמק",
      },
      {
        measurement: "מילימטר",
      },
      {
        measurement: "OZ",
      },
      {
        measurement: "Feet",
      },
      {
        measurement: "Lib",
      },
      {
        measurement: "Rull",
      },
      {
        measurement: "Galom",
      },
      {
        measurement: "טון",
      },
      {
        measurement: "מר",
      },
      {
        measurement: "זוג",
      },
      {
        measurement: "עשרות",
      },
      {
        measurement: "מאות",
      },
      {
        measurement: "אלפים",
      },
      {
        measurement: "ליטר",
      },
      {
        measurement: "KIT",
      },
      {
        measurement: "חבילה",
      },
      {
        measurement: "גליל",
      },
      {
        measurement: "ימי השכרה",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
