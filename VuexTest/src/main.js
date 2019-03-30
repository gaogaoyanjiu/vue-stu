/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'


// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})

/*
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  store
})*/

// 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。
// render 函数接收一个 createElement 方法作为第一个参数用来创建 VNode。
// https://cn.vuejs.org/v2/api/#render

// new Vue({
//   el: '#app',
//   render: function (createElement) {
//     return createElement(App) // <App/>
//   },
//   store
// })
