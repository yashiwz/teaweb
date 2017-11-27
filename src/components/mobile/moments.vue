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

    <section class="bt_nav">
      <a class="c3" href="#/mobile/index">
        <img src="/static/img/icons/n_sch.png">
        <div class="tt">商品防伪</div>
      </a>
      <a class="c3 active" href="#/mobile/moments">
        <img src="/static/img/icons/n_moments_g.png">
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
    name: 'mMoments',
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
        goods: [
          {
            id: 1,
            title:'阿拉山口的风景啊离开文件法兰克福',
            price:'2234.00',
            imgUrl: '/static/img/goods/1137.png'
          },
          {
            id: 2,
            title:'啊不然不热他也认同与',
            price:'592.00',
            imgUrl: '/static/img/goods/1292.png'
          },
          {
            id: 3,
            title:'啊不然不热他也认同与',
            price:'199.00',
            imgUrl: '/static/img/goods/1279.png'
          },
          {
            id: 4,
            title:'天羽人体因为人特人',
            price:'46.00',
            imgUrl: '/static/img/goods/1284.png'
          },
          {
            id: 5,
            title:'持续不断把二万',
            price:'999.00',
            imgUrl: '/static/img/goods/5.png'
          },
          {
            id: 6,
            title:'下车人特台湾人请问',
            price:'998.00',
            imgUrl: '/static/img/goods/6.png'
          },
          {
            id: 7,
            title:'啊不然不热他也认同与',
            price:'1998.00',
            imgUrl: '/static/img/goods/7.png'
          },
          {
            id: 8,
            title:'还挺阿什顿飞我热情温柔',
            price:'5999.00',
            imgUrl: '/static/img/goods/8.png'
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
    padding:6px 0
  }

  .m-icons .c3{
    text-align: center;
    vertical-align: top;


    padding: 6px;
  }
  .m-icons .tt{
    font-size:12px;
    line-height: 17px;
    margin: 6px 0;
  }
  .m-icons .c3 img{
    max-width: 50px;
    width: 76%;
  }
  .m-hot{

  }
  .m-hd{
    border-radius: 3px;
    padding: 12px;
    margin: 12px;
    color: white;
    background: #1f93e3; /* Old browsers */
    background: -moz-linear-gradient(left, #1f93e3 0%, #65bcff 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #1f93e3 0%,#65bcff 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #1f93e3 0%,#65bcff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f93e3', endColorstr='#65bcff',GradientType=1 ); /* IE6-9 */
  }
</style>
