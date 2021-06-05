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

    //user roles
    await queryInterface.bulkInsert("User_roles", [
      {
        role: "מפקד בסיס",
      },
      {
        role: "מפקד יחידה",
      },
      {
        role: "מפקד בים / גף",
      },
      {
        role: "חייל",
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
    await queryInterface.bulkDelete("user_roles");
    console.log("done");
  },
};
