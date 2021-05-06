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
    
    await queryInterface.bulkInsert("files", [
      {
        name: "קובץ פדף",
        main_request: 1,
        secondary_request: 1,
        bd_id: 1,
      },
      {
        name: "קובץ וורד",
        main_request: 2,
        secondary_request: 2,
        bd_id: 2,
      },
      {
        name: "פוואר פוינט",
        main_request: 3,
        secondary_request: 3,
        bd_id: 3,
      },
      {
        name: "אין לי כוח לחשוב על עוד",
        main_request: 4,
        secondary_request: 4,
        bd_id: 4,
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
    await queryInterface.bulkDelete("files");
    console.log("done");
  },
};
