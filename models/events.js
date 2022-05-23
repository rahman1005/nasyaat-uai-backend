module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define('event', {
        eventId: {

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        lembagaId:{
            type: DataTypes.INTEGER,
            allowNull:false
          },
          CategoryId:{ 
            type: DataTypes.INTEGER,
            allowNull: false
          }, 
        nameEvent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lembagaName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link_pendaftaran: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link_instagram: {
            type: DataTypes.STRING,
            allowNull: false

        },
        tanggal:{
            type: DataTypes.DATEONLY,
            allowNull:false
          },
        waktu:{
            type: DataTypes.STRING,
            allowNull:false
          },
        tempat: {
            type: DataTypes.STRING,
            allowNull: false

        },

        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        Image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // lembagaId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },

        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
        {
            tableName: 'events'
        });
    return event;
}