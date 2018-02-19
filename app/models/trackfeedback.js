module.exports = function (sequelize, DataTypes) {
    var TrackFeedback = sequelize.define("TrackFeedback", {
        feedback: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        track_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

    });
    return TrackFeedback;
};