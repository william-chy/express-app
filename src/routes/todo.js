var express = require('express');
var router = express.Router();
const controller = require('../controllers');

const asyncWrapper = (fn) => (...args) => fn(...args).catch(args[2]); //https://juejin.cn/post/6895888535301062670

router
  .get('/', asyncWrapper(controller.todo.getTodo))
  .post('/add', asyncWrapper(controller.todo.createTodo))
  .post('/update', asyncWrapper(controller.todo.updateTodo))
  .post('/delete', asyncWrapper(controller.todo.deleteTodo));

module.exports = router;
