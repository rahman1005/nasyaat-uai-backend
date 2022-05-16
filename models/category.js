module.exports = (sequelize, DataTypes)=>{
    const category = sequelize.define('category',{
        CategoryId:{ 
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
          },
    
        categoryName:{
            type: DataTypes.STRING,
            allowNull:false
          }, 
    
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false
            
          },
            
        updatedAt:{
            type: DataTypes.DATE,
            allowNull:false
            
          }
    },
    {
        tableName: 'categorys'
    });
    return category;
}