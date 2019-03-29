<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>


export default {
  name: "Item",
  props:{
    comment:Object,
    deleteComment:Function, //deleteComment 接收
    index:Number
  },
  // props:["comment"],
  methods:{

    deleteItem(){
      // 返回多个值
      const {comment,index,deleteComment}=this

      if(window.confirm(`是否删除[${comment.name}]的评论么？`)){
        // 调用删除的方法
        deleteComment(index)
      }
    }
  }
}
</script>

<style >
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
