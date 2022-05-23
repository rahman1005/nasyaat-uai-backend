module.exports = (sequelize, DataTypes)=>{
    const admin = sequelize.define('admin',{
        adminId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
          },
          name:{
            type: DataTypes.STRING,
            allowNull:true
          },
        username:{
            type: DataTypes.STRING,
            allowNull:true
          },
        password:{
            type: DataTypes.STRING,
            allowNull:false
          },
          refresh_token:{
            type: DataTypes.TEXT,
            allowNull:true
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