"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryInt
    await queryInterface.bulkInsert("Providers", [
      {
        provider_name: "הכל בזול",
      },
      {
        provider_name: "הכל ביוקר",
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
