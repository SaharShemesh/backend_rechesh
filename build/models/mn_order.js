'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MN_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MN_order.init({
    order_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MN_order',
  });
  return MN_order;
};