let { DataTypes } = require('sequelize');
let sequelize = require('../config/sequelize.js');
let Base = require('./Base.js')
let User = sequelize.define('tb_user', {
  ...Base,
  username: {
    field: 'username',
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  password: {
    field: 'password',
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  phone: {
    field: 'phone',
    allowNull: true,
    type: DataTypes.STRING(50)
  }
}, {
  timestamps: true,              // 不要默认时间戳
  tableName: 'tb_user'
});

module.exports = User;