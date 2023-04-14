'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_component.init({
    product_id: DataTypes.INTEGER,
    component_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_component',
  });
  return Product_component;
};