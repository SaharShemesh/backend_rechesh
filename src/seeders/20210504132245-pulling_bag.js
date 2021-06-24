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

    await queryInterface.bulkInsert("pulling_bags", [
      {
        bag_number: 1,
        bag_description: "תיק משיכה",
        sum_budget: 500,
        tiov_budget: 900,
        calculated_finished_budget: 50000,
      },
      {
        bag_number: 2,
        bag_description: "תיק הזמנה",
        sum_budget: 3200,
        tiov_budget: 200,
        calculated_finished_budget: 394758,
      },
      {
        bag_number: 1,
        bag_description: "תיק",
        sum_budget: 4000,
        tiov_budget: 899,
        calculated_finished_budget: 54324,
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
    await queryInterface.bulkDelete("pulling_bags");
    console.log("done");
  },
};
