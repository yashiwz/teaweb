<template>
  <div class="m-main">

    <section class="">
      <div class="cart-pl" v-for="message in messages" :key="message.id">
        <a class="flex-box" href="#/mobile/article">
          <div class="flex-hd">
            <div class="user-avatar">
              <img :src="message.avatar">
            </div>
          </div>
          <div class="flex-bd">
            <div class="user-name tx-thm">{{message.user}}</div>
            <div class="user-msg">{{message.msg}}</div>
            <p class="ss">{{message.date}}</p>
          </div>
          <div class="flex-ft">
            <div class="Img">
              <img :src="message.imgUrl">
            </div>
          </div>
        </a>
      </div>
    </section>
    <section class="bt_nav">
      <a class="c3 active">
        <img src="/static/img/icons/n_sch_g.png">
        <div class="tt">商品防伪</div>
      </a>
      <a class="c3" href="#/mobile/moments">
        <img src="/static/img/icons/n_moments.png">
        <div class="tt">溯源</div>
      </a>
      <a class="c3" href="#/mobile/login">
        <img src="/static/img/icons/n_user.png">
        <div class="tt">我的</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mMessage',
    data () {
      return {
        messages: [
          {
            id: 1,
            user:'思想的声音',
            avatar:'/static/img/avatar/sxdsy.jpg',
            msg:'专业的新型防伪防窜货平台，满足企业所需，解决发展中遇到的假货、窜货难题。',
            date:'2017-11-28 09:40:58',
            imgUrl: '/static/img/article/tea-cup.jpg'
          },
          {
            id: 2,
            user:'詹姆超',
            avatar:'/static/img/avatar/zmc.jpg',
            msg:'中国茶叶出口态势良好实现同比增长',
            date:'201711-27 07:40:58',
            imgUrl: '/static/img/article/87c985531c3e166d7965e19ff544957e.jpg'
          },
          {
            id: 3,
            user:'lcw',
            avatar:'/static/img/avatar/lcw.jpg',
            msg:'金骏眉的独特功效|金骏眉的功效与作',
            date:'2017-11-26 07:40:58',
            imgUrl: '/static/img/article/1400w_x1400h_ftbreakfast0006.jpg'
          },
          {
            id: 4,
            user:'cth',
            avatar:'/static/img/avatar/cth.jpg',
            msg:'邓小平最喜欢喝龙井茶 “中国人民的儿子”邓小平生前的生活世界',
            date:'2017-11-24 15:00:00',
            imgUrl: '/static/img/article/0255a4d243e83e3be7464ca1b348ea95.jpg'
          },
          {
            id: 5,
            user:'anoraysh',
            avatar:'/static/img/avatar/am.jpg',
            msg:'内蒙古新添年产60万吨颗粒饲料厂',
            date:'2017-10-31 07:40:58',
            imgUrl: '/static/img/article/Chinese-Tea-Culture1-700x325.jpg'
          },
          {
            id: 6,
            user:'思想的声音',
            avatar:'/static/img/avatar/sxdsy.jpg',
            msg:'中国国家（GB）茶叶标准（及有关标准）各国茶叶进出口检验标准',
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

  .articles{
    background: white;
    padding-top:12px;
  }
  .Img img{
    width:80px;
  }
  .user-name{

  }
  .user-avatar{
    border-radius: 4px;
    margin: 5px 0;
    width: 55px;
    height: 55px;
    overflow: hidden;
  }
  .user-avatar img{
    width:100%
  }
  .user-msg{
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .cart-pl .flex-box {
    padding: 12px;
    height: 92px;
  }
</style>
