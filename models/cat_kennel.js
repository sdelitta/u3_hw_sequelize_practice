'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cat_kennel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cat_kennel.belongsTo(models.humane_societies, {
        foreignKey: 'humane_society_id'
      })
    }
  }
  cat_kennel.init({
    catName: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    temperament: DataTypes.STRING,
    humaneSocietyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cat_Kennel',
    tableName: 'cat_kennel'
  });
  return cat_kennel;
};