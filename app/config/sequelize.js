let Sequelize = require('sequelize');
// 数据库配置文件

let sqlConfig = {
  host: "140.82.29.128",
  user: "root",
  password: "20101146_Mysql",
  database: "notebook"
};

let sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
  host: sqlConfig.host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize;