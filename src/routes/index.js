var express = require('express');
var router = express.Router();
const controller = require('../controllers');

const asyncWrapper = (fn) => (...args) => fn(...args).catch(args[2]); //https://juejin.cn/post/6895888535301062670

router
  .get(
    '/',
    asyncWrapper(async (req, res, next) => {
      // res.redirect('./index.html').end()
      res.send('result');
    })
  )
// .post("/user/login", controller.user.login) // 用户登录
// .get('/user',controller.user.query) // 根据用户_id查询用户
// .get('/other/checkcode', controller.other.checkcode)// 验证码获取
// .post("/leave", controller.leave.addLeaver)// 添加留言
// .get("/leave", controller.leave.getLeaves)// 留言获取
// .delete("/leave/:id", controller.leave.deleteLeaver) // 删除留言

module.exports = router;
