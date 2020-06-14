// Creating our Model
module.exports = function(sequelize, DataTypes) {
  var UsersFood = sequelize.define("UsersFood", {
    // The food name must be inputed in order for data upload
    foodName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    // The Foodnotes must have entry for database to be uploaded
    foodNote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The resturantname must have entry for database to be uploaded
    resturantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The Foodnotes must have entry for database to be uploaded
    isFavorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  UsersFood.associate = function(models) {
    // A Post should belong to an User and can't be created without a User due to the foreign key constraint
    UsersFood.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return UsersFood;
};
