// const Seq = require('sequelize')
const sequelize = require('./init');
const models = require('./define')(sequelize);

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync({ force: false }); //不带参数表示如果表不存在，才创建表。带{ force: true }参数则表示，原表存在需要删除原表。带{ force: false }参数则表示更新表的字段内容以匹配当前表。

    console.log('mysql sync success');
  })
  .catch((error) => {
    console.log('mysql fail' + error);
  });
/* 表关联 暂不用 */
/* user.hasMany(comment, {foreignKey: 'uid',as:'user'}) */
/* comment.belongsTo(user, {foreignKey: 'uid',as:'user'})
user_message.belongsTo(user, {foreignKey: 'other_uid',as:'other_user'})
article.belongsTo(user, {foreignKey: 'uid',as:'user'}) */

module.exports = {
  ...models
};
