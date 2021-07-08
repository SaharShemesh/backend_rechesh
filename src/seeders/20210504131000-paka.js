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
    await queryInterface.bulkInsert("priority_types", [
      {
        type: "סוג אחד",
      },
      {
        type: "סוג שני",
      },
      {
        type: "עוד איזה סוג",
      },
      {
        type: "סוג יפה כזה",
      },
    ]);
    await queryInterface.bulkInsert("priorities", [
      {
        priority_name: "שם חשוב",
      },
      {
        priority_name: "שם חשוב אחר",
      },
      {
        priority_name: "עוד איזה שם חשוב",
      },
      {
        priority_name: "שם חשוב יפה כזה",
      },
    ]);
    await queryInterface.bulkInsert("paka_types", [
      {
        type: "סוג אחד",
      },
      {
        type: "סוג שני",
      },
      {
        type: "עוד איזה סוג",
      },
      {
        type: "סוג יפה כזה",
      },
    ]);
    await queryInterface.bulkInsert("pakas", [
      {
        paka_team: "שפיץ",
        paka_number: "182938293",
        priority: 1,
        deadline: "23.07.21",
        paka_type: 1,
      },
      {
        paka_team: "אמופ",
        paka_number: "182928293",
        priority: 2,
        deadline: "26.07.21",
        paka_type: 2,
      },
      {
        paka_team: "שפיץ",
        paka_number: "185938293",
        priority: 3,
        deadline: "28.07.21",
        paka_type: 3,
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
    await queryInterface.bulkDelete("pakas");
    console.log("done");
  },
};
