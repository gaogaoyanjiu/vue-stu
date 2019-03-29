<template>

  <div class="todo-container">
    <div class="todo-wrap">

      <TodoHeader :addTodo="addTodo"/>
      <TodoList :items="items" :deleteTodo="deleteTodo"/>
      <TodoFooter :items="items" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>

    </div>
  </div>

</template>

<!--组件间通信基本原则

1、不要在子组件中直接修改父组件的状态数据
2、数据在哪, 更新数据的行为(函数)就应该定义在哪


vue 组件间通信方式：
1）props:此方式用于父组件向子组件传递数据
问题:
a.如果需要向非子后代传递数据必须多层逐层传递
b.兄弟组件间也不能直接 props 通信, 必须借助父组件才可

2) vue 的自定义事件
3) 消息订阅与发布(如: pubsub 库)
4) slot
5) vuex(后面单独讲)

-->

<script>

import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";

export default {
 data(){
   return{
     // items:[
     //     {title:"吃饭",complete:false},
     //     {title:"睡觉",complete:true},
     //     {title:"coding",complete:false}
     //   ]

     items: JSON.parse(window.localStorage.getItem("items_key") || "[]")
   }
 },
  watch:{
   items:{
     deep:true, // 深度监听
     handler:function (value) {
       // 将最新的json数据，保存到localStorage
       window.localStorage.setItem("items_key",JSON.stringify(value))
     }
   }
  },
    name: "App",
  components: {TodoHeader,TodoFooter,TodoList},
  methods:{
    addTodo(todo){
      this.items.unshift(todo)
    },
    deleteTodo(index){
      this.items.splice(index,1)
    },
    // 删除完成的任务（既选中的）
    deleteCompleteTodos (){
      this.items=this.items.filter(todo=>! todo.complete)
    },
    // 全选/全不选
    selectAllTodos (check){
      this.items.forEach(todo => todo.complete =check)

    }

}
}
</script>

<style>


  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
