'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product),


      // relate a category to its parent=
      Category.belongsTo(Category, {
        as: 'parent', 
        foreignKey: 'parentId', 
        targetKey: 'id',
      });

      
      // relate parent to child categories
      Category.hasMany(Category, {
        as: 'subcategories',
        foreignKey: 'parentId',
      });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    parentId: DataTypes.INTEGER, 
    feature:DataTypes.ARRAY(DataTypes.STRING),
    varientFeature:DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};