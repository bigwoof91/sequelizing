module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        date: {
            type: DataTypes.DATE
        }
    });
    return burger;
};