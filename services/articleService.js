const db = require('../models');

const getAllArticles = async () => {
  try {
    let Articles = await db.Article.findAll({
      // Con esta opción permitimos mostrar los artículos con la información del usuario
      include: {
        model: db.User,
        required: true,
        as: "User",
        attributes: ["id", "name", "email"],
      },
    });
    return Articles;
  } catch (error) {
    return error.message || "Failed to get Articles";
  }
};

const getArticle = async (id) => {
  try {
    let Article = await db.Article.findByPk(id);
    return Article;
  } catch (error) {
    throw { status: 500, message: error.message || "Failed to get Article" };
  }
};

const createArticle = async (title, content, UserId) => {
  try {
    let newArticle = await db.Article.create({
      title,
      content,
      UserId,
    });
    if (newArticle) {
        const categories = [2,3,4];
        await newArticle.setCategories(categories)
    }
    return newArticle;
  } catch (error) {
    return error.message || "Article could not be created";
  }
};

const updateArticle = async (id, title, content, idUser) => {
  try {
    let updatedArticle = await db.Article.update(
      {
        title,
        content,
        idUser
      },
      {
        where: {
          id,
        },
      }
    );
    return updatedArticle;
  } catch (error) {
    return error.message || "Article could not be updated";
  }
};

const deleteArticle = async (id) => {
  try {
    const deletedArticle = await db.Article.destroy({
      where: {
        id,
      },
    });
    return deletedArticle;
  } catch (error) {
    return error.message || "Article could not be deleted";
  }
};

module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};