
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
    });
    return Genre;
   
};