import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './router/isLogin' // 登录路由拦截器
import './components/global' // 全局组件无需注册js
import store from './vuex/store'
import Vuex from 'vuex'
import router from './router/routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.min.css'
import Mock from './mock'
import './common/js/flexiable' //自适应分辨率
import './common/js/http'
import './common/js/util'
// Mock.bootstrap();
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false // 去掉警告 You are running Vue in development mode提示信息

router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})
router.afterEach(()=>{
  NProgress.done()
})
window.RootMain =new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

