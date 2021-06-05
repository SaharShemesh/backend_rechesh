"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // //units
    // await queryInterface.bulkInsert("units", [
    //   {
    //     unit: "מופת",
    //   },
    //   {
    //     unit: "מנהלה",
    //   },
    //   {
    //     unit: "אינטגרציה",
    //   },
    //   {
    //     unit: "תוהן",
    //   },
    //   {
    //     unit: "יחידה 502",
    //   },
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("units");
    console.log("done");
  },
};
