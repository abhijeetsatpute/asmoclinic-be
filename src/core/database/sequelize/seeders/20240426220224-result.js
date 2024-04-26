"use strict";

const { before } = require("node:test");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "result",
      [
        {
          beforeImage: "/uploads/result/1a.jpg",
          afterImage: "/uploads/result/1b.jpg",
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          beforeImage: "/uploads/result/2a.jpg",
          afterImage: "/uploads/result/2b.jpg",
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          beforeImage: "/uploads/result/3a.jpg",
          afterImage: "/uploads/result/3b.jpg",
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          beforeImage: "/uploads/result/4a.jpg",
          afterImage: "/uploads/result/4b.jpg",
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(
      "result",
      {
        beforeImage: {
          [Op.in]: [
            "/uploads/gallery/1a.jpg",
            "/uploads/gallery/2a.jpg",
            "/uploads/gallery/3a.jpg",
            "/uploads/gallery/4a.jpg",
          ],
        },
      },
      {}
    );
  },
};
