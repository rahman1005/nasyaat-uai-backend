'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('lembaga', { 
      LembagaId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      }, 
      lembagaName:{
        type:Sequelize.STRING,
        allowNull:false
      },
      categoryId:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      emailLembaga:{
        type:Sequelize.STRING,
        allowNull:false
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
        updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
        
      }
    });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('lembaga');
  }
};
