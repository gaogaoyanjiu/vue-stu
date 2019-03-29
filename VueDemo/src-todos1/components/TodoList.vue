<template>
  <ul class="todo-main">
    <!--遍历列表项-->
    <TodoItem v-for="(item, index) in items" :key="index" :item="item" :index="index" />
  </ul>
</template>

<script>

import TodoItem from "./TodoItem.vue"
export default {
    props:{
      items:Array,
      // deleteTodo:Function
    },
    name: "TodoList",
    components:{TodoItem}
}
</script>

<style>

  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
