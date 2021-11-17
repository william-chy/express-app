const Seq = require('sequelize')
const shortid = require('shortid')
const time = require('../time')
module.exports = {
  NAME: 'user' /* 表名 */,
  TABLE: {
    /* 表结构 */
    uid: {
      // 权限ID
      type: Seq.STRING(20),
      primaryKey: true, // 定义主键
      comment: 'uid',
      defaultValue: shortid.generate,
      field: 'uid'
    },
    account: {
      // 账户
      type: Seq.CHAR(80),
      comment: '账户',
      field: 'account'
    },
    nickname: {
      // 昵称
      type: Seq.STRING(16),
      comment: '昵称',
      field: 'nickname'
    },
    password: {
      // 密码
      type: Seq.STRING(100),
      comment: '密码',
      field: 'password'
    },
    phone: {
      // 手机号码
      type: Seq.BIGINT(28),
      comment: '手机号码',
      field: 'phone'
    },
    email: {
      // 邮箱
      type: Seq.STRING(36),
      comment: '邮箱',
      field: 'email'
    },
    last_sign_time: {
      // 最后登录时间
      type: Seq.BIGINT(50),
      comment: '最后登录时间',
      field: 'last_sign_time'
    },
    reg_ip: {
      // 注册IP
      type: Seq.STRING(100),
      comment: '注册IP',
      field: 'reg_ip'
    },
    last_sign_ip: {
      // 最后登陆IP
      type: Seq.STRING(16),
      comment: '注册IP',
      field: 'reg_ip'
    },
    enable: {
      // 是否可以登录
      type: Seq.BOOLEAN,
      comment: '是否可以登录',
      field: 'enable'
    },
    description: {
      // 账户描述
      type: Seq.STRING(100),
      comment: '账户描述',
      field: 'description'
    },
    admin_role_ids: {
      // 角色权限id列表
      type: Seq.TEXT('long'),
      comment: '后台用户角色id列表',
      field: 'admin_role_ids'
    },
    ...time.create_date
  }
}
