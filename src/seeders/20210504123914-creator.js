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
    
    await queryInterface.bulkInsert("creators", [
      {
        creator_name: "Avi",
        creator_num: 1
      },
      {
        creator_name: "Alex",
        creator_num: 2
      },
      {
        creator_name: "David",
        creator_num: 3
      },
      {
        creator_name: "Ruti",
        creator_num: 4
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
    await queryInterface.bulkDelete("creators");
    console.log("done");
  },
};
