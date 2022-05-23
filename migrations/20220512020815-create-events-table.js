'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('events', {
      eventId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },
      lembagaId:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      CategoryId:{ 
        type: Sequelize.INTEGER,
        allowNull: false
      }, 
      nameEvent: {
        type: Sequelize.STRING,
        allowNull: false

      },
      lembagaName: {
        type: Sequelize.STRING,
        allowNull: false
    },
      link_pendaftaran: {
        type: Sequelize.STRING,
        allowNull: false

      },
      link_instagram: {
        type: Sequelize.STRING,
        allowNull: false

      },
      tanggal:{
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      waktu:{
        type: Sequelize.STRING,
        allowNull:false
      },
      tempat: {
        type: Sequelize.STRING,
        allowNull: false

      },

      deskripsi: {
        type: Sequelize.TEXT,
        allowNull: false

      },

      Image: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      // lembagaId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false

      // },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false

      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false

      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('events');

  }
};
