'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('categorys', { 
      CategoryId:{ 
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },

      categoryName:{
        type: Sequelize.STRING,
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
    
    await queryInterface.dropTable('categorys');
    
  }
};
