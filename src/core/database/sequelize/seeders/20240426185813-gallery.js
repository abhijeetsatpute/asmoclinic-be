"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "image",
      [
        {
          name: "gallery-1.webp",
          path: "/uploads/gallery/gallery-1.webp",
          uploadedBy: 7,
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          name: "gallery-2.webp",
          path: "/uploads/gallery/gallery-2.webp",
          uploadedBy: 7,
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          name: "gallery-3.webp",
          path: "/uploads/gallery/gallery-3.webp",
          uploadedBy: 7,
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          name: "gallery-4.webp",
          path: "/uploads/gallery/gallery-4.webp",
          uploadedBy: 7,
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          name: "gallery-5.webp",
          path: "/uploads/gallery/gallery-5.webp",
          uploadedBy: 7,
          createdAt: `2024-04-26 18:33:19.545+05:30`,
          updatedAt: `2024-04-26 18:33:19.545+05:30`,
        },
        {
          name: "gallery-6.webp",
          path: "/uploads/gallery/gallery-6.webp",
          uploadedBy: 7,
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
      "image",
      {
        name: {
          [Op.in]: [
            "gallery-1.webp",
            "gallery-2.webp",
            "gallery-3.webp",
            "gallery-4.webp",
            "gallery-5.webp",
            "gallery-6.webp",
          ],
        },
      },
      {}
    );
  },
};
