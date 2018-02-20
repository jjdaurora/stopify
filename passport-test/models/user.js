module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        underscored: true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        underscored: true
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        underscored: true
      },
      spotifyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        underscored: true
      },
      userImage: {
        type: DataTypes.STRING,
        allowNull: false,
        underscored: true
      },
      authenticationToken: {
        type: DataTypes.STRING,
        allowNull: false,
        underscored: true
      }
    });

     User.associate = function(models) {
       // Associating Author with Posts
       // When an Author is deleted, also delete any associated Posts
       User.hasMany(models.Feedback, { onDelete: "cascade" });
     };
return User;
    };