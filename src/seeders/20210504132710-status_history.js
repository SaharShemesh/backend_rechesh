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
    
    await queryInterface.bulkInsert("status_histories", [
      {
        comments: "הערה ראשונה",
        status: 1,
        part: 3,
        field_index: 7,
        new_value: "עדיין לא כל כך ברור לי מה זה",
        date: "23.08.2021",
      },
      {
        comments: "הערה שנייה",
        status: 2,
        part: 7,
        field_index: 5,
        new_value: "עוד ערך כלשהו",
        date: "26.11.2021",
      },
      {
        comments: "הערה שלישית",
        status: 3,
        part: 6,
        field_index: 2,
        new_value: "כן",
        date: "30.10.2023",
      },
      {
        comments: "הערה רביעית",
        status: 4,
        part: 23,
        field_index: 4,
        new_value: "לא",
        date: "30.10.2025",
      },
    ]);

    // await queryInterface.bulkInsert("orders", [
    //   {
    //     order: 1
    //   },
    //   {
    //     order: 5
    //   },
    //   {
    //     order: 7
    //   },
    //   {
    //     order: 12
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
    await queryInterface.bulkDelete("status_histories");
    await queryInterface.bulkDelete("orders");
    console.log("done");
  },
};
