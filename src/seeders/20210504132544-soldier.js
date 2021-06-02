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
    
    await queryInterface.bulkInsert("soldiers", [
      {
        first_name: "סהר",
        last_name: "שמש",
        id_num: "6575894",
      },
      {
        first_name: "אור",
        last_name: "בורנשטין",
        id_num: "8645198",
      },
      {
        first_name: "מיכל",
        last_name: "אטיאס",
        id_num: "3548675",
      },
      {
        first_name: "אורי",
        last_name: "אשל",
        id_num: "9356782",
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
    await queryInterface.bulkDelete("soldiers");
    console.log("done");
  },
};
