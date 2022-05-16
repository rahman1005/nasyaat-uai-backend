module.exports = (sequelize, DataTypes)=>{
    const admin = sequelize.define('admin',{
        adminId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
          },
        username:{
            type: DataTypes.STRING,
            allowNull:true
          },
        password:{
            type: DataTypes. STRING,
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
        tableName: 'admin'
    });
    return admin;
}