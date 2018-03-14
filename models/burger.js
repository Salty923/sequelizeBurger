module.exports = function (sequelize, DataTypes) {
    //var gets lost   "Burger" is what is called in controller route"
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        } 
    });

    return Burger;
}