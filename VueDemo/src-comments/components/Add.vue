<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name" />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content" />
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>


export default {
    name: "Add",
    // （3）接收 App1.vue 传递过来的属性
    props:{
      addComment:{ // 指定属性名 / 属性值的类型 / 必要性
        type: Function,
        required:true
      }
    },
    // v-model 对应的data值(名称一一对应), 组件的data必须是函数
    data(){
      return{
        name:'',
        content:''
      }
    },
    methods:{

      // @click 点击事件调用方法
      add(){

        // 1. 检查输入的合法性
        const name = this.name.trim()
        const content=this.content.trim()
        if (!name||!content){

          alert("名称和内容不能为空！！！")
          return
        }

        // 2. 根据输入的数据，封装成一个comment对象
        const comment ={
            name,
            content
        }

        // 3. 添加到comment中
        this.addComment(comment)

        // 4. 清除数据
        this.name=''
        this.content=''

      }
    }

}

</script>

<style>

</style>
