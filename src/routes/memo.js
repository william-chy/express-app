var express = require('express');
var router = express.Router();
const controller = require('../controllers');

const asyncWrapper = (fn) => (...args) => fn(...args).catch(args[2]); //https://juejin.cn/post/6895888535301062670

router.get('/get', asyncWrapper(controller.memo.getMemo));
router.post('/update', asyncWrapper(controller.memo.createOrUpdateMemo));

module.exports = router;
