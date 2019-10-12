// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import TodoList from './components/TodoList.vue'
import Axios from 'axios'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/* eslint-disable no-new */
/* eslint-disable */
 // eslint-disable-next-line
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
