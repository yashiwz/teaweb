<template>
  <div class="m-main">
    <div class="slider_main">
      <el-carousel id="banner" height="250px">
        <el-carousel-item v-for="bannerImg in bannerImgs" :key="bannerImg.id">
          <div><img :src="bannerImg.imgUrl" class="slider_item_img"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="info">
      <section class="verify">
        <!--<h4 class="tt-pl">系统认证</h4>-->
        <div class="au_hd bg-theme">
          <img src="/static/img/verified_2.png">
          茶精灵认证系统
        </div>
        <div class="au_bd">
          <div class="logo"><img src="/static/img/product/1-1FI1115QB02.png"></div>
          <div>此产品是<span class="pd">勐海巅味号茶业有限公司</span>出品</div>
          <div>【享系列】享时光</div>
          <div>防伪信息第<span class="tm tx-thm">333</span>次扫描查询</div>
        </div>
      </section>
      <h4 class="tt-pl">系统认证</h4>
      <section class="system p12">
        <div>企业名称：勐海巅味号茶业有限公司</div>
        <div>营业执照号码：91532822329265063L</div>
        <div>食品经营许可：JY15328228882251</div>
      </section>
      <h4 class="tt-pl">企业链接</h4>
      <div class="links">
        <a  href="http://www.dwhtea.com/"class="m-wrap flex-box">
          <div class="m-w-a">
            <img src="/static/img/icons/index.png">
          </div>
          <div class="m-w-b">
            产品企业官网
          </div>
          <div class="m-w-c">
            <i class="el-icon-arrow-right"></i>
          </div>
        </a>
        <a href="http://vip.bcfxad.com" class="m-wrap flex-box">
          <div class="m-w-a">
            <img src="/static/img/icons/phone.png">
          </div>
          <div class="m-w-b">
            官方微官网
          </div>
          <div class="m-w-c">
            <i class="el-icon-arrow-right"></i>
          </div>
        </a>
        <a class="m-wrap flex-box">
          <div class="m-w-a">
            <img src="/static/img/icons/wechat.png">
          </div>
          <div class="m-w-b">
            关注官方微信
          </div>
          <div class="m-w-c">
            <i class="el-icon-arrow-right"></i>
          </div>
        </a>
      </div>
    </div>

    <section class="bt_nav tab">
      <a class="active c4" href="#/mobile/product/scan">
        <div class="tt">防伪</div>
      </a>
      <a class="c4" href="#/mobile/product/moment">
        <div class="tt">溯源</div>
      </a>
      <a class="c4" href="#/mobile/product/report">
        <div class="tt">报告</div>
      </a>
      <a class="c4" href="#/mobile/product/intro">
        <div class="tt">介绍</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mScan',
    data () {
      return {
        bannerImgs: [
          {
            id: 1,
            imgUrl: '/static/img/product/1-1FI11IK0315.jpg'
          },
          {
            id: 2,
            imgUrl: '/static/img/product/1-1FI11.jpg'
          },
          {
            id: 3,
            imgUrl: '/static/img/product/1-1FI11I940407.jpg'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-main{
    margin-top:0;
  }
  .info{
    background: white;
    padding-top:1px;
  }
 .verify{
   border: 1px solid #77dcc5;
   border-radius: 4px;
   margin: 12px 12px 20px;
   background: white;
 }
 .au_hd{
   letter-spacing: 1px;
   font-weight: 500;
   color: white;
   position: relative;
   padding:14px 12px 13px 64px;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   font-size: 18px;
 }
  .au_hd img{
    width: 40px;
    top: 8px;
    left: 12px;
    position: absolute;
  }
  .au_bd{
    padding: 12px;
    text-align: center;
  }
  .au_bd .logo img{
    max-width: 90px;
  }
  .au_bd div{
    line-height: 34px;
  }
  .au_bd div span{
    font-weight: bold;
  }
  .au_bd div span.pd{
    color:#fa5555;
    font-size:15px;
    margin:2px;
  }
  .au_bd div span.tm{
    font-size:16px;
    margin:2px;
  }
  .system{
    margin:12px;
    background: #f6f6f6;
  }
  .system div{
    line-height: 24px;
  }

  .m-wrap{
    position: relative;
    border-bottom: 1px solid #f4f4f4;

  }
  .m-wrap:hover, .m-wrap:focus{
    background: #fafafa;
  }
  .m-w-a{
    position:absolute;
    left: 18px;
    top: 14px;
  }
  .m-w-a img{
    width: 22px;
  }
  .m-w-b{
    font-size: 16px;
    padding: 12px 56px
  }
  .m-w-c{
    position: absolute;
    right: 12px;
    top: 14px;
  }
  .links{
    margin-top: 4px;
  }

</style>
