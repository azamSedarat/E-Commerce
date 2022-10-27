'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product),
      Category.belongsTo(Category, {
        as: 'parent', 
        foreignKey: 'parentId', 
        targetKey: 'id',
      })
    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    feature:DataTypes.ARRAY(DataTypes.STRING),
    varientFeature:DataTypes.ARRAY(DataTypes.STRING),
    parentId: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false
  });
  return Category;
};