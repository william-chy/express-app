const Todo = require('../db').todo;

module.exports = {
  async getTodo(req, res, next) {
    const { page = 1, pageSize = 10 } = req.query;
    let { count, rows } = await Todo.findAndCountAll({
      where: '', // 为空，获取全部，也可以自己添加条件
      offset: (page - 1) * Number(pageSize), // 开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
      limit: Number(pageSize) // 每页限制返回的数据条数
    });

    res.json({
      state: 'success',
      message: '返回成功',
      data: {
        count: count,
        list: rows
      }
    });
  },

  async createTodo(req, res, next) {
    let { task_name = '', is_done = false, description = '', detail = '' } = req.body;
    if (!task_name) {
      return res.json({
        code: 400,
        msg: '任务名必填!'
      });
    }
    const todo = await Todo.create({ task_name, is_done, description, detail });
    if (todo.id != null) {
      res.json({
        code: 200,
        msg: '添加成功!',
        data: {
          id: todo.id,
          task_name,
          is_done,
          description,
          detail
        }
      });
    } else {
      res.json({
        code: 500,
        msg: '添加失败，服务器异常!'
      });
    }
  },
  async updateTodo(req, res, next) {
    let { id, task_name = '', is_done = false, description = '', detail = '' } = req.body;

    if (!id) {
      return res.json({
        code: 400,
        msg: 'id缺失!'
      });
    }
    if (!task_name) {
      return res.json({
        code: 400,
        msg: '任务名必填!'
      });
    }

    const todo = await Todo.update(
      { task_name, is_done, description, detail },
      {
        where: {
          id
        }
      }
    );
    if (todo[0]) {
      res.json({
        code: 200,
        msg: '更新成功!',
        data: todo
      });
    } else {
      res.json({
        code: 500,
        msg: '更新失败，服务器异常!'
      });
    }
  },
  async deleteTodo(req, res, next) {
    let { id } = req.body;

    if (!id) {
      return res.json({
        code: 400,
        msg: 'id缺失!'
      });
    }

    const todo = await Todo.destroy({
      where: {
        id
      }
    });
    if (todo) {
      res.json({
        code: 200,
        msg: '添加成功!',
        data: todo
      });
    } else {
      res.json({
        code: 500,
        msg: '添加失败，服务器异常!'
      });
    }
  }
};
