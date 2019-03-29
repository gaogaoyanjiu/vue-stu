(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源 全局指令
    Vue.directive('my-directive',function (el, binding) {
      console.log('Vue全局指令 my-directive')
      el.textContent = 'my-directive----'+binding.value.toLowerCase()
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('Vue实例对象方法 vm $myMethod()')
    }
  }

  //向外暴露
  window.MyPlugin = MyPlugin
})(window)
