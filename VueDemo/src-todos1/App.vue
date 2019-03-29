<template>

  <div class="todo-container">
    <div class="todo-wrap">

      <!-- 绑定事件监听 -->
      <!--<TodoHeader @addTodo="addTodo"/>-->
      <TodoHeader ref="header"/>

      <TodoList :items="items" />
      <TodoFooter :items="items" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>
      <!--指定插到的组件位置-->
      <todo-footer>
        <input type="checkbox" v-model="isCheck"  slot="isCheck"/>
        <span slot="count">已完成{{itemsSize}} / 全部{{items.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="itemsSize"  @click="deleteItem">清除已完成任务</button>
      </todo-footer>
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
import PubSub from "pubsub-js";
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
import storgeUtil from "./util/storgeUtil";

export default {
 data(){
   return{
     // items:[
     //     {title:"吃饭",complete:false},
     //     {title:"睡觉",complete:true},
     //     {title:"coding",complete:false}
     //   ]

     // items: JSON.parse(window.localStorage.getItem("items_key") || "[]")
     items:storgeUtil.readTodos()
   }
 },
  computed:{
    itemsSize(){
      console.log([1,2,3,4,5,6].reduce((totle,todo)=> totle+todo))
      // totle 初始值，todo 元素 => 返回值计算，默认值0赋值给totle
      return this.items.reduce((totle,todo)=> totle + (todo.complete?1:0),0)
    },
    // 计算属性
    isCheck:{
      get(){ // 返回true时，更新 v-model 的值
        return this.itemsSize===this.items.length && this.itemsSize>0
      },
      set(value){ // value是当前check最新的值
        this.selectAllTodos(value)

      }
    }

  },
  mounted(){
   this.$refs.header.$on("addTodo",this.addTodo)
    // 订阅消息
    PubSub.subscribe("deleteTodo", (msg,index) =>{
      this.deleteTodo(index)
    })
  },
  watch:{
   items:{
     deep:true, // 深度监听
     // handler:function (value) {
     //   // 将最新的json数据，保存到localStorage
     //   // window.localStorage.setItem("items_key",JSON.stringify(value))
     //   storgeUtil.saveTodos(value)
     // }
     handler: storgeUtil.saveTodos  // 这种写法相对于下面的匿名函数的写法,handler 的值是个函数, 后面不要调用
     // handler: function (todos){
     //     window.localStorage.setItem(ITEMS_KEY,JSON.stringify(todos))
     //   }

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

    },
    deleteItem(){
      this.deleteCompleteTodos()
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
