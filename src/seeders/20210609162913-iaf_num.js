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

    await queryInterface.bulkInsert("iaf_nums", [
      {
        iaf_num: "43839283",
      },
      {
        iaf_num: "93729274",
      },
      {
        iaf_num: "28393759",
      },
      {
        iaf_num: "92848574",
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
    await queryInterface.bulkDelete("iaf_nums");
    console.log("done");
  },
};
