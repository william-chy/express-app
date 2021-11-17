const Seq = require('sequelize');

const config = {
  database: {
    DATABASE: 'my_app',
    USERNAME: 'root',
    PASSWORD: '123456',
    HOST: 'localhost',
    MYSQL_PORT: 3306
  }
};

const sequelize = new Seq(
  config.database.DATABASE, // 数据库名
  config.database.USERNAME, // 用户名
  config.database.PASSWORD, // 用户密码
  {
    dialect: 'mysql', // 数据库使用mysql
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    host: config.database.HOST, // 数据库服务器ip
    port: config.database.MYSQL_PORT, // 数据库服务器端口
    timezone: '+08:00', // 设置东八区
    define: {
      // 字段以下划线（_）来分割（默认是驼峰命名风格）
      underscored: true,
      timestamps: false,
      freezeTableName: true //这边可以设置全局的不需要自动变复数命名表名
    }
  }
);

module.exports = sequelize;
