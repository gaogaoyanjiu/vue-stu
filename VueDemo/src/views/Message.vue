<template>
    <div>
      <ul>
        <li v-for="(message,index) in messages" :key="message.id">
          <!--<a href="???">{{message.title}}</a>-->
          <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
          <button @click="pushShow(message.id)">push查看</button>
          <button @click="replaceShow(message.id)">replace查看</button>
        </li>
        <!-- this.$router.back() 加上this不好使 -->
           <button @click="$router.back()">回退</button>
      </ul>

      <div>
        <hr>

        <router-view ></router-view>
      </div>
    </div>

</template>

<script>
    export default {
      // 路由传递参数query方式 通过？号传递, ?mid=1234,组件通过props接收参数
      props:
        {
          mid:String
        },
        name: "Messages",
      data(){
          return{
            messages:[]
          }
      },
      methods:{
        pushShow(id){
          // alert(id)
          // 栈结构: 可以回退弹栈 和 进入下个页面压栈
          this.$router.push(`/home/message/detail/${id}`)
        },
        replaceShow(id){
          // alert(id)
          this.$router.replace(`/home/message/detail/${id}`)
        }


      },
      mounted() {
        // 测试接收的参数
        alert(this.$route.query.mid)

          setTimeout(()=>{
          const messages=[
                          {
                            id:1,
                            title:'message01'
                          },{
                            id:2,
                            title:'message02'
                          },{
                            id:3,
                            title:'message03'
                          },{
                            id:4,
                            title:'message04'
                          }
                        ]


            this.messages=messages
          },1000)
      }
    }
</script>

<style>

</style>
