
const user = require('../models/user.js');

const getUserInfo = async function (ctx){
    const id = ctx.params.id;
    const result = await user.getUserById(id);
    ctx.body = result;
}

const postUserAuth = async function(ctx){
  cosnt data = ctx.request.body; // post过来的树数据存在request.body里
  const userInfo = await user.getUserByName(data.name);

  if(userInfo != null) { // 如果查无此用户会返回null
    if(userInfo.password != data.password) {
      this.body = {
        success: false, // success标志位是方便前端判断返回是正确与否
        info: '密码错误!'
      }
    }else{ // 如果密码正确
      const userToken = {
        name: userInfo.user_name,
        id: userInfo.id
      }
      const secret = 'vue-koa-demo'; //指定密钥, 这是之后用来判断token合法性的标志
      const token = jwt.sign(userToken， secret)； // 签发token
      this.body = {
        success: true,
        token: token // 返回token
      }
    }
  }else {
    this.body = {
      success: false,
      info: '用户不存在!' // 如果用户不存在返回用户不存在
    }
  }
}

module.exports = {
    getUserInfo,
    postUserAuth
}
