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
    
    await queryInterface.bulkInsert("constants", [
      {
        type: "קבוע 1",
        condition: "בדיקה של קבוע אחד",
        price_value: "מלא כסף",
      },
      {
        type: "קבוע 2",
        condition: "בדיקה של קבוע שני",
        price_value: "מלא כסף שוב",
      },
      {
        type: "קבוע 3",
        condition: "בדיקה של קבוע שלישי",
        price_value: "הפעם לא כזה מלא כסף",
      },
      {
        type: "קבוע 4",
        condition: "בדיקה של קבוע רביעי",
        price_value: "מלא מלא כסף",
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
    await queryInterface.bulkDelete("constants");
    console.log("done");
  },
};
