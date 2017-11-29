<template>
  <div class="m-main">
    <div class="slider_main">
      <el-carousel id="banner" height="161px">
        <el-carousel-item v-for="bannerImg in bannerImgs" :key="bannerImg.id">
          <div><img :src="bannerImg.imgUrl" class="slider_item_img"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="scan-pl flex-box">
      <div class="flex-bd">
        <div class="sch">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="searchString">
          </el-input>
        </div>
      </div>
      <div class="flex-ft">
        <a href="#/mobile/product/scan"><img src="/static/img/icons/scan.png"></a>
      </div>
    </div>
    <section class="m-icons">
      <a class="c3" href="#/mobile/report">
        <img src="/static/img/icons/report.jpg">
        <div class="tt">打假举报</div>
      </a>
      <a class="c3" href="#/mobile/report">
        <img src="/static/img/icons/add.jpg">
        <div class="tt">入驻申请</div>
      </a>
      <a class="c3" href="#/mobile/report">
        <img src="/static/img/icons/intro.jpg">
        <div class="tt">茶精灵介绍</div>
      </a>
    </section>
    <section class="articles">
      <h4 class="tt-pl">最新资讯</h4>
      <div class="cart-pl" v-for="article in articles" :key="article.id">
        <a class="flex-box" href="#/mobile/article">
          <div class="flex-hd">
            <div class="Img">
              <img :src="article.imgUrl">
            </div>
          </div>
          <div class="flex-bd">
            <p class="tt">{{article.title}}</p>
            <p class="ss">{{article.date}}</p>
          </div>
        </a>
      </div>
    </section>
    <section class="bt_nav">
      <a class="c3 active" href="#/mobile/index">
        <img src="/static/img/icons/n_sch_g.png">
        <div class="tt">商品防伪</div>
      </a>
      <a class="c3" href="#/mobile/moments">
        <img src="/static/img/icons/n_moments.png">
        <div class="tt">溯源</div>
      </a>
      <a class="c3" href="#/mobile/me">
        <img src="/static/img/icons/n_user.png">
        <div class="tt">我的</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mIndex',
    data () {
      return {
        searchString: '',
        bannerImgs: [
          {
            id: 1,
            imgUrl: '/static/img/u68.png'
          },
          {
            id: 2,
            imgUrl: '/static/img/u68.png'
          }
        ],
        articles: [
          {
            id: 1,
            title:'专业的新型防伪防窜货平台，满足企业所需，解决发展中遇到的假货、窜货难题。',
            date:'2017-11-28 09:40:58',
            imgUrl: '/static/img/article/tea-cup.jpg'
          },
          {
            id: 2,
            title:'中国茶叶出口态势良好实现同比增长',
            date:'201711-27 07:40:58',
            imgUrl: '/static/img/article/87c985531c3e166d7965e19ff544957e.jpg'
          },
          {
            id: 3,
            title:'金骏眉的独特功效|金骏眉的功效与作',
            date:'2017-11-26 07:40:58',
            imgUrl: '/static/img/article/1400w_x1400h_ftbreakfast0006.jpg'
          },
          {
            id: 4,
            title:'邓小平最喜欢喝龙井茶 “中国人民的儿子”邓小平生前的生活世界',
            date:'2017-11-24 15:00:00',
            imgUrl: '/static/img/article/0255a4d243e83e3be7464ca1b348ea95.jpg'
          },
          {
            id: 5,
            title:'内蒙古新添年产60万吨颗粒饲料厂',
            date:'2017-10-31 07:40:58',
            imgUrl: '/static/img/article/Chinese-Tea-Culture1-700x325.jpg'
          },
          {
            id: 6,
            title:'中国国家（GB）茶叶标准（及有关标准）各国茶叶进出口检验标准',
            date:'2017-10-31 07:40:58',
            imgUrl: '/static/img/article/shutterstock_95477803.jpg'
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
  .m-icons{
    background: white;
    padding:6px 0;
    margin-bottom:12px;
  }

  .m-icons .c3{
    text-align: center;
    vertical-align: top;


    padding: 6px;
  }
  .m-icons .tt{
    font-size: 15px;
    line-height: 17px;
    margin: 6px 0;
  }
  .m-icons .c3 img{
    max-width: 50px;
    width: 76%;
  }
  .articles{
    background: white;
    padding-top:12px;
  }
  .scan-pl .sch{
width:100%;
  }
  .scan-pl a{
    display: block;
    padding: 16px 12px 16px 8px;
  }
  .scan-pl img{
    width:28px;
  }

  .scan-pl .sch{
    padding: 12px 6px 12px 12px;

  }
  .scan-pl .sch .el-input__icon{
    line-height:34px
  }

  .Img img{
    width:114px;
  }

</style>
