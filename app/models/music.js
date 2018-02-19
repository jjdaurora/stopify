module.exports = function (sequelize, DataTypes) {
    var Music = sequelize.define("Music", {
        track_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        track_artist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        track_genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        track_artwork: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        track_popularity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        track_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
    });
    Music.associate = function (models) {
        // Associating Music with Posts
        // When an Music is deleted, also delete any associated Posts
        Music.hasOne(models.User, {
            onDelete: "cascade"
        });
    }
    Music.associate = function (models) {
        // Associating Music with Posts
        // When an Music is deleted, also delete any associated Posts
        Music.hasOne(models.Genre, {
            onDelete: "cascade"
        });
    }
    Music.associate = function (models) {
        // Associating Music with Posts
        // When an Music is deleted, also delete any associated Posts
        Music.hasOne(models.TrackFeedback, {
            onDelete: "cascade"
        });
    }
    return Music;
};