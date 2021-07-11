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
    await queryInterface.bulkInsert("priority_types", [
      {
        type: "סוג אחד",
      },
      {
        type: "סוג שני",
      },
      {
        type: "עוד איזה סוג",
      },
      {
        type: "סוג יפה כזה",
      },
    ]);
    await queryInterface.bulkInsert("priorities", [
      {
        priority_name: "מפת דרכים",
      },
      {
        priority_name: "7200",
      },
      {
        priority_name: 'אמל"ח פשוט',
      },
      {
        priority_name: "רגיל",
      },
      {
        priority_name: "מש 3",
      },
      {
        priority_name: "מש 2",
      },
    ]);
    await queryInterface.bulkInsert("paka_types", [
      {
        type: "B",
      },
      {
        type: "A",
      },
      {
        type: "משימה",
      },
      {
        type: "אחזקה בקליטת משימה",
      },
      {
        type: "הנדסת שדה וחוליות",
      },
      {
        type: 'קו"מ',
      },
      {
        type: 'מצ"מ',
      },
    ]);

    await queryInterface.bulkInsert("iaf_nums", [
      {
        iaf_num: "43839283",
        desc: "מסחא ראשונה",
      },
      {
        iaf_num: "93729274",
        desc: "מסחא שנייה",
      },
      {
        iaf_num: "28393759",
        desc: "מסחא שלישית",
      },
      {
        iaf_num: "92848574",
        desc: "מסחא רביעית",
      },
    ]);
    await queryInterface.bulkInsert("pakas", [
      {
        paka_team: "אמופ",
        paka_number: "182938293",
        priority: 1,
        deadline: "2021-04-12",
        paka_type: 1,
        paka_desc: "פקע פ",
      },
      {
        paka_team: "אמופ",
        paka_number: "182928293",
        priority: 2,
        deadline: "2021-04-12",
        paka_type: 2,
        paka_desc: "פקע שנייה",
      },
      {
        paka_team: "שפיצים",
        paka_number: "185938293",
        priority: 3,
        deadline: "2021-08-12",
        paka_type: 7,
        paka_desc: "פקע שלישית",
        item_desc: "תיאור הפריט",
        iaf_Num: 2,
      },
      {
        paka_team: "שפיצים",
        paka_number: "184938293",
        priority: 3,
        deadline: "2021-07-12",
        paka_type: 7,
        paka_desc: "פקע רביעית",
        item_desc: "תיאור הפריט",
        iaf_Num: 4,
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
    await queryInterface.bulkDelete("pakas");
    console.log("done");
  },
};
