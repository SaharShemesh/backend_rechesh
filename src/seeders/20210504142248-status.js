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

    //statuses
    await queryInterface.bulkInsert("statuses", [
      {
        status: "ממתין לאישור מחלקת רכש",
      },
      {
        status: "ממתין לשליחת בקשה להצעה",
      },
      {
        status: "נשלח לספקים",
      },
      {
        status: "סבב אישורים",
      },
      {
        status: "סבב אישורים הסתיים",
      },
      {
        status: "נפתחה דרישה במערכת מידע",
      },
      {
        status: "נפתחה הזמנה במערכת מידע ממתין לאישור הספק להזמנה",
      },
      {
        status: "ממתין להגעת הפריט לבסיס או לאיסוף הפריט מהחנות",
      },
      {
        status: "ממתין לאיסוף המזמין מהמחלקה",
      },
      {
        status: "טיפול חריגים",
      },
      {
        status: "הזמנה טופלה",
      },
      {
        status: "בעיית תשלום לספק",
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
    await queryInterface.bulkDelete("stasuses");
    console.log("done");
  },
};
