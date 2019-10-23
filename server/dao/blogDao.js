const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Model = Sequelize.Model;
const {check, validationResult, body, param} = require('express-validator/check');

class Blog extends Model {
}

Blog.init({
    id: {
      type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    title: Sequelize.DataTypes.STRING,
    intro: Sequelize.DataTypes.STRING,
    content: Sequelize.DataTypes.TEXT,
    tags: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "[]",
      get() {
        const tags = this.getDataValue('tags');
        return JSON.parse(tags);
      },
      set(val) {
        this.setDataValue("tags", JSON.stringify(val));
      }
    },
    createdAt: Sequelize.DataTypes.BIGINT,
    updatedAt: Sequelize.DataTypes.BIGINT
  },
  {
    sequelize, modelName:
      'blog'
  }
);

class BlogModel {
  constructor() {
    this.id = "";
    this.title = "";
    this.intro = "";
    this.tags = [];
    this.content = "";
  }
}

const checkPost = [body('title').not().isEmpty(), body('intro').not().isEmpty(), body('content').not().isEmpty(), body('tags').isJSON()];
const checkPut = [param('blogId').isNumeric()];
const checkDelete = [param('blogId').isNumeric()];


sequelize.sync({force: false,alter:true});
module.exports = Blog;
module.exports.findById = Blog.findById;
module.exports.findAll = Blog.findAll;
module.exports.model = BlogModel;
module.exports.checkPost = checkPost;
module.exports.checkPut = checkPut;
module.exports.checkDelete = checkDelete;
module.exports.insert = function (blog) {
  const date = new Date();
  blog.createdAt = date;
  blog.updatedAt = date;
  blog.id = '';
  return Blog.create(blog);
}

module.exports.updateById = function (blog) {
  blog.updatedAt = new Date();
  return Blog.update(blog, {
    where: {
      id: blog.id
    }
  });
}

module.exports.deleteById = function (id) {
  return Blog.destroy({
    where: {
      id: id
    }
  });
}

