/**
 * 注册其它全局组件
 */
import Vue from 'vue'
import OperationMenu from './flow/open-menu.js'

export default {
  register () {
    Vue.component('op-menu', OperationMenu)
  }
}
