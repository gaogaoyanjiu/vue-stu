<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"  />
    </label>
    <span>
          <span>已完成{{itemsSize}}</span> / 全部{{items.length}}
        </span>
    <button class="btn btn-danger" v-show="itemsSize"  @click="deleteIntem">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "TodoFoot",
      props:{
          items:Array,
          deleteCompleteTodos:Function,
          selectAllTodos:Function
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
      methods:{
        deleteIntem(){
          this.deleteCompleteTodos()
        }
      }
    }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
