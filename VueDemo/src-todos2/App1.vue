<template>
<div v-if="!repoUrl">loading</div>
<div v-else>most star repo is <a :href="repoUrl"> {{repoName}}</a></div>
</template>

<script>
  // 引入模块
import axios from "axios";

  export default {
     data(){
       return{
         repoName:"",
         repoUrl:""
       }
     },
    mounted() {
       const url="https://api.github.com/search/repositories?q=vue&sort=stars"

      // 传统写法
      // this.$http.get(url).then(
      //   function(successCallback){
      //     // 响应成功回调
      //     alert("请求成功"+successCallback.toString())
      //   },
      //   function(errorCallback){
      //     // 响应错误回调
      //     alert("请求失败"+errorCallback.toString())
      //   }
      // );


      // successCallback和 errorCallback 是匿名函数的参数,自定义的: 成功和失败的回调函数取决于存在的位置
      // this.$http.get(url).then(
      //    successCallback=>{
      //      const result= successCallback.data
      //      const mostRepo=result.items[0]
      //      this.repoUrl=mostRepo.html_url
      //      this.repoName=mostRepo.name
      //
      //    },
      //   errorCallback=>{
      //      alert("请求失败"+errorCallback.toString())
      //    }
      //  )

      // 发送 ajax 请求 ,方式和resource的类似
      axios.get(url).then(
        successCallback => {
          console.log(successCallback.data) // 得到返回结果数据
          const result= successCallback.data
          const mostRepo=result.items[0]
          this.repoUrl=mostRepo.html_url
          this.repoName=mostRepo.name
        })
        .catch(errorCallback => {
          console.log(errorCallback.message)
          alert("请求失败")
        })

    }
  }
</script>

<style>



</style>
