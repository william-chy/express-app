const Memo = require('../db').memo;

module.exports = {
  async getMemo(req, res, next) {
    const { id } = req.query;
    if (!id)
      return res.json({
        code: 400,
        query: req.query,
        msg: '参数缺失!'
      });
    let memo = await Memo.findOne({ where: { id }, raw: true });
    if (memo && memo.id) {
      res.json({
        code: 200,
        msg: '成功!',
        data: { ...memo }
      });
    } else {
      res.json({
        code: 500,
        memo,
        msg: '失败，找不到此id记录，请先上传!'
      });
    }
  },
  async createOrUpdateMemo(req, res, next) {
    let { id, user = 'admin', update_timestamp = Number(new Date()), content = '' } = req.body;
    let memo;
    if (!id) {
      memo = await Memo.create({ user, update_timestamp, content });
    } else {
      const res = await Memo.upsert({ id, user, update_timestamp, content });
      memo = res[0];
    }

    if (memo) {
      res.json({
        code: 200,
        msg: '成功!',
        data: { ...memo.dataValues }
      });
    } else {
      res.json({
        code: 500,
        msg: '失败，服务器异常!'
      });
    }
  }
};
