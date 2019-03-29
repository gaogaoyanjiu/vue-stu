<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对 VUE 的评论</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <!--（2）向组件传递参数（方法或者属性） -->
      <Add :addComment="addComment"/>
      <!--deleteComment传递到list-->
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>


  </div>
</template>

<script>

import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
    name: "App",

  data(){
    return {
      // 共享的数据定义到全局的App.vue中
      comments:[
        {
          name: 'Bob',
          content: 'vue so easy'
        },
        {
          name: 'Tom',
          content: 'vue 很容易'
        },
        {
          name: 'jack',
          content: 'vue so so',
        }
    ]
  }
  },

    methods:{
      // （1）定义 方法
      addComment (comment) {
        // 追加到上边
        this.comments.unshift(comment)
      },
      deleteComment(index){
        // 删除方法定义
        this.comments.splice(index,1)
      }
    },

    components:{
      Add,
      List
    }

}
</script>

<style>

</style>
