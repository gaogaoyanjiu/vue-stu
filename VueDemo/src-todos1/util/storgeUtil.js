/*
 * localStorge 存储数据的公共模块
 * 1、函数
 * 2、对象
 * 需要对外暴露一个功能还是多个功能
 */
const ITEMS_KEY="items_key"
export default {
   saveTodos(todos){
     window.localStorage.setItem(ITEMS_KEY,JSON.stringify(todos))
   },
  readTodos(){
     return JSON.parse(window.localStorage.getItem(ITEMS_KEY) || "[]")
  }
}
