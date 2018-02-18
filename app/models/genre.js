
module.exports = function (sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        pseudo_genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        genre_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });
    return Genre;
   
};