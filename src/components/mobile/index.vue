<template>
  <div class="m-main">
    <div class="slider_main">
      <el-carousel id="banner" height="161px">
        <el-carousel-item v-for="bannerImg in bannerImgs" :key="bannerImg.id">
          <div><img :src="bannerImg.imgUrl" class="slider_item_img"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <section class="m-icons">
      <a class="c3" v-for="icon in icons">
        <img :src="icon.imgUrl">
        <div class="tt">{{icon.title}}</div>
      </a>
    </section>
    <section class="articles">
      <h4 class="tt-pl">最新资讯</h4>
      <div class="cart-pl" v-for="article in articles" :key="article.id">
        <a class="flex-box" href="#/mobile/orderdetail">
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
        icons: [
          {
            id: 1,
            title:'打假举报',
            imgUrl: '/static/img/icons/report.jpg'
          },
          {
            id: 2,
            title:'入驻申请',
            imgUrl: '/static/img/icons/add.jpg'
          },
          {
            id: 3,
            title:'茶精灵介绍',
            imgUrl: '/static/img/icons/intro.jpg'
          }
        ],
        articles: [
          {
            id: 1,
            title:'专业的新型防伪防窜货平台，满足企业所需，解决发展中遇到的假货、窜货难题。',
            date:'2017-07-31 07:40:58',
            imgUrl: '/static/img/article/tea-cup.jpg'
          },
          {
            id: 2,
            title:'标题名称一定要够长大家才看得见aabb\n' +
            'ccddeeff<标题>',
            date:'2017-07-31 07:40:58',
            imgUrl: '/static/img/article/87c985531c3e166d7965e19ff544957e.jpg'
          },
          {
            id: 3,
            title:'啊不然不热他也认同与',
            date:'2017-07-31 07:40:58',
            imgUrl: '/static/img/article/1400w_x1400h_ftbreakfast0006.jpg'
          },
          {
            id: 4,
            title:'天羽人体因为人特人',
            date:'2017-07-31 07:40:58',
            imgUrl: '/static/img/article/0255a4d243e83e3be7464ca1b348ea95.jpg'
          },
          {
            id: 5,
            title:'持续不断把二万',
            date:'2017-07-31 07:40:58',
            imgUrl: '/static/img/article/Chinese-Tea-Culture1-700x325.jpg'
          },
          {
            id: 6,
            title:'下车人特台湾人请问',
            date:'2017-07-31 07:40:58',
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
</style>
