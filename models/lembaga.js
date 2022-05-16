module.exports = (sequelize, DataTypes)=>{
    const lembaga = sequelize.define('lembaga',{
        LembagaId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
          }, 
          lembagaName:{
            type:DataTypes.STRING,
            allowNull:false
          },
          categoryId:{
            type: DataTypes.INTEGER,
            allowNull:false
          },
          emailLembaga:{
            type:DataTypes.STRING,
            allowNull:false
          },
          password:{
            type:DataTypes.STRING,
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
        tableName: 'lembaga'
    });
 
    
    return lembaga;
}