const Seq = require('sequelize')
// const shortid = require('shortid')
const time = require('../time')

module.exports = {
  NAME: 'to_do_list' /* 表名 */,
  TABLE: {
    /* 表结构 */

    // uid: {
    //   // ID
    //   type: Seq.STRING(20),
    //   primaryKey: true, // 定义主键
    //   comment: 'uid',
    //   defaultValue: shortid.generate,
      
    //   field: 'uid'
    // },
    id: {
      // ID
      type: Seq.INTEGER(10).UNSIGNED, //ZEROFILL
      primaryKey: true, // 定义主键
      autoIncrement: true, // 自动递增
      comment: 'id',
      field: 'id'
    },
    task_name: {
      // 任务名称
      type: Seq.STRING(32),
      comment: '任务名称',
      field: 'task_name'
    },
    is_done: {
      // 是否完成
      type: Seq.BOOLEAN,
      comment: '是否完成',
      field: 'is_done'
    },
    description: {
      // 任务描述
      type: Seq.STRING(128),
      comment: '任务描述',
      field: 'description'
    },
    detail: {
      // 任务详情
      type: Seq.TEXT('long'),
      comment: '任务详情',
      field: 'detail'
    },
    ...time.create_date
  }
}
