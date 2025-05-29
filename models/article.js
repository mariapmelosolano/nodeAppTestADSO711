'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User)//Un articulo pertenece a un usuario
      models.User.hasMany(Article)//Un usuario tiene mcuhos articulos
      //Un articulo puede pertenecer a muchas categorias
      Article.belongsToMany(models.Category,{
        through: 'articleCategories',
        as: 'categories'
      })
    }
  }
  Article.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};