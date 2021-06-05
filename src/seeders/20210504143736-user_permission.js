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
    //create permissions
    // await queryInterface.bulkInsert("User_permissions", [
    //   {
    //     permission: "מנהל על",
    //   },
    //   {
    //     permission: "מנהל",
    //   },
    //   {
    //     permission: "לקוח",
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
    await queryInterface.bulkDelete("user_permissions");
    console.log("done");
  },
};
