<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="userName" type="text" placeholder="enter the name you search"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import Pubsub from "pubsub-js"

    export default {
        name: "Search",
      data(){
          return{
            userName:''
          }
      },
      methods:{
        search(){
          // alert(111)
          // 发布消息
          Pubsub.publish("search",this.userName)
        }
      }
    }
</script>

<style>

</style>
