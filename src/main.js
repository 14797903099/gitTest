// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/reset.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/reset.css'
import Com from './components/index.js'
import VueResource from 'vue-resource'
import store from './store/store.js'

// Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

Com.register()
/* eslint-disable no-new */
// Vue.http.options.root = 'http://typhoon.zjwater.gov.cn'
// Vue.http.options.root = 'https://free-api.heweather.com'
// Vue.http.options.root = 'https://api.douban.com/v2'
// https://api.douban.com/v2/book/1220562


Vue.http.interceptors.push((request, next) => {
  request.headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
  console.log(request)
  // .post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  // const token = Auth.getToken()
  // if (token) {
  //   request.headers.set('Authorization', `Bearer ${token}`)
  // }
    // ...
    // 请求发送前的处理逻辑
    // ...
    console.log(11)
    next((response) => {
    	console.log(33)
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})

var app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
