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
    // await queryInterface.bulkInsert("priority_types", [
    //   {
    //     type: "סוג אחד",
    //   },
    //   {
    //     type: "סוג שני",
    //   },
    //   {
    //     type: "עוד איזה סוג",
    //   },
    //   {
    //     type: "סוג יפה כזה",
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
    await queryInterface.bulkDelete("priority_types");
    console.log("done");
  },
};
