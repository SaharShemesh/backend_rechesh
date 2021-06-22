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
        type: "אסמכתא",
        condition: "עלות מקסימלית לרכש באסמכתא",
        price_value: "2999",
      },
      {
        type: "אסמכתא",
        condition: "עלות מקסימלית לפקע באסמכתא",
        price_value: "10000",
      },
      {
        type: "אסמכתא",
        condition: "כמות ימים לרכש מאותו יצרן באסמכתא",
        price_value: "193",
      },
      {
        type: "משיכה",
        condition: "אחוז תקציב זמין נדרש בתיק משיכה",
        price_value: "30%",
      },
      {
        type: "דרישה",
        condition: "עלות מינימאלית לרכש בתיק דרישה",
        price_value: "2100",
      },
      {
        type: "דרישה",
        condition: "כמות ימים לרכש מאותו יצרן בתיק דרישה",
        price_value: "102",
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
