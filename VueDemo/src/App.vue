<template>
  <div>

    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Test</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--<a href="#/about" class="list-group-item">About</a> -->

          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item" >Home</router-link>
          <!--<a href="#/home" class="list-group-item router-link-active">Home</a>-->
        </div>
      </div>
      <div class="col-xs-6"><div class="panel">
        <div class="panel-body">
          <!-- 只需要一个 -->
            <!-- 缓存路由的标签 用于管理当前的路由的显示的所有路由连接-->
            <!--<keep-alive>-->
              <!--
                :msg 带:号标识参数,参数是变量，
                msg 不带：号的参数是内容值
              -->
              <router-view msg="消息提示"></router-view>
            <!--</keep-alive>-->

        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",

  }
</script>

<style>

</style>
