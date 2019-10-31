let { DataTypes } = require('sequelize');
let sequelize = require('../config/sequelize.js');
let Base = require('./Base.js')
let Article = sequelize.define('tb_article', {
  ...Base,
  title: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT
  },

}, {
  timestamps: true,              // 不要默认时间戳
  tableName: 'tb_article'
});

module.exports = Article;