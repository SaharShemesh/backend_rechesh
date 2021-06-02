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
    
    await queryInterface.bulkInsert("bims", [
      {
        bim_name: "מתן",
        unit_id: 1
      },
      {
        bim_name: "מצפן",
        unit_id: 2
      },
      {
        bim_name: "נשר",
        unit_id: 3
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
    await queryInterface.bulkDelete("bims");
    await queryInterface.bulkDelete("units");
    console.log("done");
  },
};
