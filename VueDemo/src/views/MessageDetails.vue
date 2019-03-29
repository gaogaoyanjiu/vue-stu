<template>
    <div>
      <ul>
        <h2>ID:{{this.$route.params.id}}</h2>
        <li>id:{{messageDetail.id}}</li>
        <li>message:{{messageDetail.title}}</li>
        <li>content:{{messageDetail.content}}</li>
      </ul>

    </div>
</template>

<script>
    export default {

        name: "MessageDtails",
      data(){
          return{
            messageDetail:{},
            // msg:msg
          }
      },
      mounted() {
          setTimeout(()=>{
            // params方式传递参数
            alert(this.$route.params.id)

            // 标签属性方式传递参数
            // alert(this.msg)
            const AllMessageDetails=[
              {
                id:1,
                title:'message01',
                content:'message01 content...'
              },{
                id:2,
                title:'message02',
                content:'message02 content...'
              },{
                id:3,
                title:'message03',
                content:'message03 content...'
              },{
                id:4,
                title:'message04',
                content:'message04 content...'
              }
            ]

            // this 代表当前路由组件
            this.AllMessageDetails=AllMessageDetails
            const id=this.$route.params.id*1
            this.messageDetail=AllMessageDetails.find(detail=>detail.id===id)
          },1000)
      },
      watch:{
          // 监听路由的(params参数的)变化
          $route:function (value) {
            alert(this.$route.params.id)

            const id= value.params.id*1
            this.messageDetail=this.AllMessageDetails.find(detail=>detail.id===id)
          }

      }
    }
</script>

<style>

</style>
