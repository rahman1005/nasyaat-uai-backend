module.exports = (sequelize, DataTypes)=>{
    const event = sequelize.define('event',{
        eventId:{

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
            },

            nameEvent:{
            type: DataTypes.STRING,
            allowNull: false
            },

            waktu:{
            type: DataTypes.DATE,
            allowNull: false
            },
            
            link_pendaftaran:{
            type:DataTypes.STRING,
            allowNull: false
            },
            
            deskripsi:{
            type:DataTypes.TEXT,
            allowNull:false
            },
        
            Image:{
            type:DataTypes.STRING,
            allowNull:false,
            },
            
            lembagaId:{
            type:DataTypes.INTEGER,
            allowNull:false
            },
            
            categoryId:{
            type:DataTypes.INTEGER,
            allowNull: false
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
        tableName: 'events'
    });
    return event;
}