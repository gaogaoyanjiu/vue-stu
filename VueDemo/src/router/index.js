/*
 配置路由器
*/

import Vue from "vue"
import VueRouter from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import News from  "../views/News";
import Message from "../views/Message";
import MessageDetails from "../views/MessageDetails";

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:"/about",
      component:About
    },
    {
      path:"/home",
      component:Home,
      children:[
        {
          path:"/home/news",  // 全路径路由配置
          component:News
        },{
          path:"message",  // 简化路由配置
          component:Message,
          children: [
            {
              path:"detail/:id",  // 简化路由配置
              component:MessageDetails
            }
          ]
        },
        {
          path:"",  // 默认请求的路径转发
          redirect:"/home/news"
        },
      ]
    },
    {
      path:"/",
      redirect:"/about"
    }
  ]

})
