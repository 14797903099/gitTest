import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import  SET from "@/views/vue-set.vue"
import  MYEchart from "@/views/echart/index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login },
    { path: '/home', name: 'Home', component: Home },
    { path: '/vue-set', name: 'SET', component: SET },
    { path: '/echart', name: 'MYEchat', component: MYEchart }
  ]
})
