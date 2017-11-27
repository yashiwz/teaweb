<template>
  <div class="m-me">
    <section class="m-me-main">
          <div class="avatar"><img src="/static/img/head_img.png"></div>
      <!--已登录-->
          <!--<div>用户 1553216425615</div>-->

      <!--未登录-->
          <div>Hi ！</div>
          <div class="p12">
            <el-button type="primary" plain>登录</el-button>
            <el-button type="success" plain>注册</el-button>
          </div>
      <!-- -->
    </section>
    <section class="links">
      <a class="m-wrap flex-box"  href="#/mobile/orders">
        <div class="m-w-a">
          <img src="/static/img/n_order.png">
        </div>
        <div class="m-w-b">
          全部订单
        </div>
        <div class="m-w-c">
          <i class="el-icon-arrow-right"></i>
        </div>
      </a>
      <div class="order-nav p12">
        <a class="c4 active" href="#/mobile/orders">
          <img src="/static/img/od_nv_1.png">
          <div class="tt">待付款</div>
        </a>
        <a class="c4" href="#/mobile/orders">
          <img src="/static/img/od_nv_2.png">
          <div class="tt">待处理</div>
        </a>
        <a class="c4" href="#/mobile/orders">
          <img src="/static/img/od_nv_3.png">
          <div class="tt">问题单</div>
        </a>
        <a class="c4" href="#/mobile/orders">
          <img src="/static/img/od_nv_4.png">
          <div class="tt">已完成</div>
        </a>
      </div>
      <div class="m-wrap flex-box">
        <div class="m-w-a">
          <img src="/static/img/balance.png">
        </div>
        <div class="m-w-b">
          账户余额
        </div>
        <div class="m-w-c">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <a class="m-wrap flex-box" href="tel:+40012341234">
        <div class="m-w-a">
          <img src="/static/img/service.png">
        </div>
        <div class="m-w-b">
          联系客服
        </div>
        <div class="m-w-c">
          400-1234-1234
        </div>
      </a>
      <a class="m-wrap flex-box">
        <div class="m-w-a">
          <img src="/static/img/user.png">
        </div>
        <div class="m-w-b">
          退出登录
        </div>
      </a>
    </section>
    <section class="bt_nav">
      <a class="c3" href="#/mobile/index">
        <img src="/static/img/icons/n_sch.png">
        <div class="tt">商品防伪</div>
      </a>
      <a class="c3" href="#/mobile/moments">
        <img src="/static/img/icons/n_moments.png">
        <div class="tt">溯源</div>
      </a>
      <a class="c3 active" href="#/mobile/me">
        <img src="/static/img/icons/n_user_g.png">
        <div class="tt">我的</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mMe',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
.m-me-main{
  text-align: center;
  padding: 40px 0 15px;
  font-weight: bold;
  /*background:white;*/
  color:white;
  background: #40d1ad; /* Old browsers */
  background: -moz-linear-gradient(left, #40d1ad 0%, #7addc6 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #40d1ad 0%,#7addc6 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #40d1ad 0%,#7addc6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#40d1ad', endColorstr='#7addc6',GradientType=1 ); /* IE6-9 */
}
.avatar{
  width:90px;height:90px;
  margin:0 auto;
  border-radius:53px;
  border:3px solid #8ac6f4;
  margin-bottom:12px;
}
  .avatar img{
    width:100%;
  }

 .m-me .links{
  background:white;
}
  .m-wrap{
    position: relative;
    border-bottom: 1px solid #f4f4f4;

  }
  .m-wrap:hover, .m-wrap:focus{
    background: #f6f6f6;
  }
  .m-w-a{
    position:absolute;
    left: 8px;
    top: 12px;
  }
  .m-w-a img{
    width: 26px;
  }
  .m-w-b{
    font-size: 16px;
    padding: 12px 49px;
  }
  .m-w-c{
    position: absolute;
    right: 12px;
    top: 14px;
  }
.links .order-nav{
  border-bottom: 1px solid #f4f4f4;
}
.links .order-nav .c4{
  text-align:center;
}
.links .order-nav .c4 img{
    width:32px;
  margin-bottom: 8px;
  }
.links .order-nav .tt{
}
</style>
