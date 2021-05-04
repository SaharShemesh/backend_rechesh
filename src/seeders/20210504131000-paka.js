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
    
    await queryInterface.bulkInsert("pakas", [
      {
        paka_team: "שפיץ",
        priority: 1,
        deadline: "23.07.21",
        paka_type: 1,
      },
      {
        paka_team: "הסוג שהוא לא שפיץ שאני לא זוכר את השם שלו",
        priority: 2,
        deadline: "26.07.21",
        paka_type: 2,
      },
      {
        paka_team: "שפיץ",
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
