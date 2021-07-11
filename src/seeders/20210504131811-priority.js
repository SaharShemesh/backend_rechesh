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
    // await queryInterface.bulkInsert("priorities", [
    //   {
    //     priority_name: "שם חשוב",
    //   },
    //   {
    //     priority_name: "שם חשוב אחר",
    //   },
    //   {
    //     priority_name: "עוד איזה שם חשוב",
    //   },
    //   {
    //     priority_name: "שם חשוב יפה כזה",
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
    await queryInterface.bulkDelete("priorities");
    console.log("done");
  },
};
