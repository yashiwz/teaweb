<template>
  <div id="app" class="mobile">
    <!--<header id="top" class="header navbar-fixed-top">-->
      <!--<div class="flex-box">-->
        <!--<div class="flex-hd logo">-->
            <!--<a href="#/index">-->
              <!--<img id="logo-image" class="logo-image" src="/static/img/logo2.jpg" alt="点指财富通">-->
            <!--</a>-->
        <!--</div>-->
        <!--<div class="flex-bd">-->
          <!--<div class="sch">-->
            <!--<el-input-->
              <!--placeholder="请输入内容"-->
              <!--prefix-icon="el-icon-search"-->
              <!--v-model="searchString">-->
            <!--</el-input>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="flex-ft">-->
          <!--<div class="m-cart-btn bubble">-->
            <!--<a target="_blank" href="#/cart">-->
              <!--<img src="/static/img/cart-w.png">-->
            <!--</a>-->
            <!--<div class="noti_bubble">2</div>-->
          <!--</div>-->
        <!--</div>-->

      <!--</div>-->
    <!--</header>-->
    <router-view></router-view>
    <footer>
      <!--<a href="https://www.imphoton.com"><p>技术支持：www.imphoton.com</p></a>-->
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'mobile',
    data() {
      return {
        searchString: ''
      }
    }
  }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .mobile .header {
    z-index: 99;
    /*-webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.18);*/
    /*box-shadow: 0 2px 2px rgba(0, 0, 0, 0.18);*/
    background: #1f93e3;
    background: -webkit-gradient(linear, left top, right top, from(#1f93e3),to(#65bcff));
    background: linear-gradient(to right, #1f93e3 0%,#65bcff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f93e3', endColorstr='#65bcff',GradientType=1 );
  }

  .mobile .header .logo {
    width: 60px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 12px;
  }

  .mobile .header .logo a {
    display: block;
    padding: 6px;
    color: #444444;
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
  }

  .mobile .header .logo a img {
    color: white;
  }


  .m-cart-btn{
    margin: 13px 12px 14px 0
  }
  .m-cart-btn a{
    display: block;
    padding: 5px 10px 3px 6px
  }
  .m-cart-btn img{
    height: 24px;
    width: 25px;
  }
  .mobile .bubble {position:relative;}
  .mobile .noti_bubble {
    line-height: 18px;
    position: absolute;
    top: -3px;
    right: 2%;
    padding: 0 5px 0 5px;
    background-color: rgba(255, 0, 0, 0.77);
    color: white;
    border-radius: 15px;
  }

  footer{
    text-align:center;
    padding:30px 12px 0;
  }
  .mobile footer{
    margin-bottom: 63px;
  }
</style>
