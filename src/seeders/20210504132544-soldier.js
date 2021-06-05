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
    //soldiers
    // await queryInterface.bulkInsert("soldiers", [
    //   {
    //     first_name: "סהר",
    //     last_name: "שמש",
    //     id_num: "8653940",
    //   },
    //   {
    //     first_name: "אור",
    //     last_name: "בורנשטיין",
    //     id_num: "8653940",
    //   },
    //   {
    //     first_name: "אורי",
    //     last_name: "אשל",
    //     id_num: "7685942",
    //   },
    //   {
    //     first_name: "דני",
    //     last_name: "סנטקובסקי",
    //     id_num: "7345940",
    //   }, //....
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("soldiers");
    console.log("done");
  },
};
