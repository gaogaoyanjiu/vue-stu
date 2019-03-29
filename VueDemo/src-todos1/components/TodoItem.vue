<template>

  <!--
  onmouseover / onmouseenter 鼠标指针移入元素上触发
  onmouseout  / onmouseleave 鼠标指针移出元素上触发

  区别在于是否支持事件冒泡：
    mouseenter是不支持事件冒泡的，在使用的过程中，
    因为mouseover支持冒泡，所以在父级元素内移动时，
    可能会多次触发事件，建议大家谨慎使用mouseover。
  -->


  <li  @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}" >

    <label>
      <input type="checkbox" v-model="item.complete"/>
      <span>{{item.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  import PubSub from "pubsub-js";

export default {

    name: "TodoItem",
  data(){
      return{
        bgColor:"white",
        isShow:false
      }
  },
    props:{
      item:Object,
      index:Number,
      // deleteTodo:Function
    },
  methods:{
    handleEnter(isEnter){
      if(isEnter){
        this.bgColor="gray"
        this.isShow=true
      }else{
        this.bgColor="white"
        this.isShow=false
      }
    },
    deleteItem(){
      // 1 提示信息
      // const的作用域与let命令相同：只在声明所在的块级作用域内有效。
      const {item,index,deleteTodo} =this

      // 引号必须是 tab键盘上边的 ` 点

      if(window.confirm(`是否删除的[${item.title}]数据吗？`)){
        // 2 调用方法
        // deleteTodo(index)
        PubSub.publish("deleteTodo",index)
      }



    }
  }
}
</script>

<style>

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
