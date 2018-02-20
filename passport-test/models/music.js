module.exports = function (sequelize, DataTypes) {
    var Music = sequelize.define("Music", {
      track_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      track_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      track_artist: {
        type: DataTypes.STRING,
        allowNull: false
      },
      track_genre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      track_artwork: {
        type: DataTypes.STRING,
        allowNull: false
      },
      track_popularity: {
        type: DataTypes.STRING,
        allowNull: false
      }
    
    });
      Music.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Music.hasMany(models.Feedback, { onDelete: "cascade" });
        Music.hasMany(models.Genre, { onDelete: "cascade"});
      };
    return Music;
};