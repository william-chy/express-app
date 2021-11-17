const SEQ_PARAMETER = {
  raw: true,
  timestamps: false,
  freezeTableName: true
};

module.exports = (sequelize) => {
  const todo = sequelize.define(require('./models/db_to_do_list').NAME, require('./models/db_to_do_list').TABLE, {
    ...SEQ_PARAMETER,
    initialAutoIncrement: 10000
  });
  const memo = sequelize.define(require('./models/db_memo').NAME, require('./models/db_memo').TABLE, {
    ...SEQ_PARAMETER,
    initialAutoIncrement: 10000
  });

  const _define = { todo, memo };

  return {
    ..._define,
    sequelize
  };
};
