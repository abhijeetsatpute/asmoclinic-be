"use strict";
const doctorsData = require("../../../../dump/doctors");

// Add the user id of ADMIN
doctorsData.forEach((x) => {
  x.createdBy = 7;
  x.createdAt = `2024-04-26 18:33:19.545+05:30`;
  x.updatedAt = `2024-04-26 18:33:19.545+05:30`;
  x.info = JSON.stringify(x.info);
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("doctor", doctorsData, {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete("doctor", {}, {});
  },
};
