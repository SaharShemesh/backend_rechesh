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

    await queryInterface.bulkInsert("budget_types", [
      {
        type: "מטלה תקציבית",
      },
      {
        type: "אישור מנהל לתקציב בסיסי",
      },
      {
        type: "מצמ",
      },
      {
        type: "פרויקנט",
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
    await queryInterface.bulkDelete("budget_types");
    console.log("done");
  },
};
