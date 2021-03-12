'use strict';

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

   await queryInterface.bulkInsert("users",[
    {
      user_rank: 1,
      phone: "0526594854",
      location_id: 1,
      user_typeid: 1,
      role_id:1,
      perrmission_id:1,
      soldier_id:1
    }
   ]);

  await queryInterface.bulkInsert("base_heirarchies",[
    {
      bim_name: "נשר",
      department_name: "צבד",
      unit_name:"מופת"
    }
  ])
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
