// db.js

const Sequelize = require('sequelize'); //引入sequelize

// 使用url连接的形式进行连接
const Todolist = new Swquelize('mysql://root:XXXX@localhost/todolist'. {
  define: {
    timestamps: false // 取消Sequelize自动给数据表加入时间戳(createAt以及updateAt)
  }
})

module.exports = {
  Todolist //将Todolist暴露出给接口方便Model调用
}
