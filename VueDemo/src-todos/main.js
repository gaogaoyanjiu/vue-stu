/*
 *入口JS
 */
import Vue from 'vue'
import App from './App.vue'

// 引入 base 样式
import './base.css'


// 声明使用插件(安装插件)

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
