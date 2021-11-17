const Seq = require('sequelize');
// const shortid = require('shortid')
const time = require('../time');

module.exports = {
  NAME: 'memo' /* 表名 */,
  TABLE: {
    /* 表结构 */
    id: {
      // ID
      type: Seq.INTEGER(10).UNSIGNED,
      primaryKey: true, // 定义主键
      autoIncrement: true, // 自动递增
      comment: 'id',
      field: 'id'
    },
    user: {
      // 用户名称
      type: Seq.STRING(32),
      comment: '用户名称',
      field: 'user'
    },
    update_timestamp: {
      // 更新时间戳
      type: Seq.BIGINT(32).UNSIGNED,
      comment: '更新时间戳',
      field: 'update_timestamp',
      defaultValue: () => {
        return +new Date();
      }
    },
    content: {
      // 内容
      type: Seq.TEXT('long'),
      comment: '内容',
      field: 'content'
    },
    ...time.create_date
  }
};
