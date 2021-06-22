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

    await queryInterface.bulkInsert("providers", [
      {
        provider_name: "מחסני חשמל",
        provider_num: 567,
        profession: "אלקטרוניקה",
        phones: "0528375829",
        fax: "5675674789",
        contact_name: "יואב",
        adress: "יגאל אלון 90",
        mail: "electronics_storage@gmail.com",
        site_adress: "electronics-storage.com",
      },
      {
        provider_name: "ענק לוגיסטי",
        provider_num: 326,
        profession: "לוגיסטיקה",
        phones: "0507843264",
        fax: "485856686",
        contact_name: "אבי",
        adress: "דרך השלום 43",
        mail: "huge_logistics@gmail.com",
        site_adress: "huge_logistics.com",
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
    await queryInterface.bulkDelete("providers");
    console.log("done");
  },
};
