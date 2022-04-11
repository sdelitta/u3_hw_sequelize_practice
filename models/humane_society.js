'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class humane_society extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      humane_society.hasMany(models.dog_pounds, models.cat_kennels, {
        foreignKey: 'humane_society_id'
      })
    }
  }
  humane_society.init({
    address: DataTypes.STRING,
    availableDogs: DataTypes.INTEGER,
    availableCats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Humane_Society',
    tableName: 'humane_society'
  });
  return humane_society;
};