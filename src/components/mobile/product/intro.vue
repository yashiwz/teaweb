<template>
  <div class="m-main">
    <div class="p12 intro-top bg-theme">
      <div class="product-tt">【享系列】享时光</div>
      <div class="flex-box ">
        <div class="flex-hd">
          <img src="/static/img/product/u366.jpg">
        </div>
        <div class="flex-bd">

            <div>

              <span>品牌</span> 勐海巅味号茶业<br>
              <span>产地</span> 云南省 <span>年份</span> 2016<br>
              <span>工艺</span> 离地发酵<span>茶性</span> 熟普<br>

              <span>扫描次数</span> <span class="time">13938</span> 次<br>
              <span>自定义</span> 自定义 <br>
            </div>
        </div>
      </div>
    </div>
    <div class="intro">

      <div>
        <div class="st"><img src="/static/img/icons/tea.png"> 第1泡</div>
        <div>所谓“一泡水”就是指洗涤茶叶xxxx</div>
        <div class="pic">
          <div class="Img" v-for="Img in Imgs" :key="Img.id">
            <img :src="Img.imgUrl">
          </div>
        </div>
      </div>
      <div>
        <div class="st"><img src="/static/img/icons/tea.png"> 第1泡</div>
        <div>所谓“一泡水”就是指洗涤茶叶xxxx</div>
        <div class="pic">
          <div class="Img" v-for="Img in Imgs" :key="Img.id">
            <img :src="Img.imgUrl">
          </div>
        </div>
      </div>
    </div>
    <section class="bt_nav tab">
      <a class="c4" href="#/mobile/product/scan">
        <div class="tt">防伪</div>
      </a>
      <a class="c4" href="#/mobile/product/moment">
        <div class="tt">溯源</div>
      </a>
      <a class="c4" href="#/mobile/product/report">
        <div class="tt">报告</div>
      </a>
      <a class="active c4" href="#/mobile/product/intro">
        <div class="tt">介绍</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mIntro',
    data () {
      return {
        Imgs: [
          {
            id: 1,
            imgUrl: '/static/img/article/1400w_x1400h_ftbreakfast0006.jpg'
          },
          {
            id: 2,
            imgUrl: '/static/img/article/0255a4d243e83e3be7464ca1b348ea95.jpg'
          },
          {
            id: 3,
            imgUrl: '/static/img/article/87c985531c3e166d7965e19ff544957e.jpg'
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

  .intro .Img{
    display:inline-block;
    width: 24vw;
    height: 24vw;
    margin:5px;
    overflow: inherit;
  }
  .intro{
    padding:12px;
    background:white;
  }
  .intro .st{
    margin-top: 8px;
    font-size:18px;
    line-height: 30px;
  }
  .intro .st img{
    margin:0 4px 0 0;
    width: 20px;
    vertical-align: text-top;
  }

</style>
