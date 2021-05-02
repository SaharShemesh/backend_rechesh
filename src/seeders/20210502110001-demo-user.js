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

    //units
    await queryInterface.bulkInsert("units", [
      {
        unit: "מופת",
      },
      {
        unit: "מנהלה",
      },
      {
        unit: "אינטגרציה",
      },
      {
        unit: "תוהן",
      },
      {
        unit: "יחידה 502",
      },
    ]);
    //bims
    await queryInterface.bulkInsert("bims", [
      {
        bim_name: "מצפן",
        unit_id: 1,
      },
      {
        bim_name: 'מת"ן',
        unit_id: 4,
      },
    ]);
    //locations
    await queryInterface.bulkInsert("base_hierarchies", [
      {
        department_name: "מערכות מידע",
        bim_id: 2,
      },
    ]);
    //soldiers

    await queryInterface.bulkInsert("soldiers", [
      {
        first_name: "סהר",
        last_name: "שמש",
        id_num: "8653940",
      },
      {
        first_name: "אור",
        last_name: "בורנשטיין",
        id_num: "8653940",
      },
      {
        first_name: "אורי",
        last_name: "אשל",
        id_num: "7685942",
      },
      {
        first_name: "דני",
        last_name: "סנטקובסקי",
        id_num: "7345940",
      }, //....
    ]);

    //create permissions
    await queryInterface.bulkInsert("User_permissions", [
      {
        permission: "מנהל על",
      },
      {
        permission: "מנהל",
      },
      {
        permission: "לקוח",
      },
    ]);

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
    //and finally create the dummy users
    await queryInterface.bulkInsert("users", [
      {
        phone: "0539403940",
        location_id: 1,
        soldier_id: 1,
        permission_id: 1,
        role_id: 1,
      },
      {
        phone: "0539403940",
        location_id: 1,
        soldier_id: 2,
        permission_id: 2,
        role_id: 1,
      },
      {
        phone: "0539403940",
        location_id: 1,
        soldier_id: 3,
        permission_id: 3,
        role_id: 1,
      },
      {
        phone: "0539403940",
        location_id: 1,
        soldier_id: 4,
        permission_id: 1,
        role_id: 1,
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
    await queryInterface.dropTable("units");
    await queryInterface.dropTable("bims");
    await queryInterface.dropTable("base_hierarchies");
    await queryInterface.dropTable("soldiers");
    await queryInterface.dropTable("User_permissions");
    await queryInterface.dropTable("User_roles");
    await queryInterface.dropTable("users");
    console.log("done");
  },
};
