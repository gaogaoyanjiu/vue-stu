<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="item" @keyup.enter="addItem" />
  </div>
</template>

<script>
    export default {

      name: "TodoHeader",
      props:{
        addTodo:Function
      },

      data(){
        return{
          item:''
        }
      },

    methods:{
        // ****方法必须在methods内部****

      addItem(){




        //1、检查数据和合法性
        const item=this.item.trim()
        if(!item){
          alert("数据不能为空！！！")
          return
        }

        // 2 构造Item对象
        const todo = {
          title:item,
          complete:false
        }

        // 3 调用方法
        this.addTodo(todo)

        // 4 清空输入框
        this.item=""
      }
    }
    }
</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
