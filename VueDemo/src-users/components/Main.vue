<template>
  <div>
    <h2 v-if="firstView">请输入搜索内容</h2>
    <h2 v-if="loading">Loding...</h2>
    <h2 v-if="errMessage">{{errMessage}}</h2>
    <div class="row" >
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.img" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>

    </div>

  </div>
</template>

<script>
  import Pubsub from "pubsub-js"
  import axios from "axios"
    export default {
      name: "Main",
      data(){
          return{
            firstView:true,
            loading:false,
            errMessage:'',
            users:null // [{url:'',img:'',name:''}]
          }
      },
      mounted() {
          // 初始化订阅消息
        Pubsub.subscribe("search",(msg,userName)=>{
          const url=`https://api.github.com/search/users?q=${userName}`
          // alert(222)
          // 更新请求状态(请求中)

          this.firstView=false
          this.loading=true
          this.errMessage=''
          this.users=null

          // 发送ajax
          axios.get(url).then(
            // 成功
            resp=>{
              const items=resp.data
              const users=items.items.map(user => ({
                url:user.html_url,
                img:user.avatar_url,
                name:user.login
            }))
              this.loading=false
              this.users=users
             }).
          catch(err=>{

            // 失败
            this.loading=false
            this.errMessage='访问失败'
          })

        })
      }
    }
</script>

<style>

</style>
