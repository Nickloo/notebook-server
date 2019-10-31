let { DataTypes } = require('sequelize');

let Base = {
  id: {
    type: DataTypes.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'deleted_at',
  }
}

module.exports = Base;