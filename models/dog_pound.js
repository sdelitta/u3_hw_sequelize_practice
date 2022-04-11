'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dog_pound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dog_pound.belongsTo(models.humane_societies, {
        foreignKey: 'humane_society_id'
      })
    }
  }
  dog_pound.init({
    dogName: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    temperament: DataTypes.STRING,
    humaneSocietyId: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Dog_Pound',
    tableName: 'dog_pound'
  });
  return dog_pound;
};