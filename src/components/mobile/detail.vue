<template>
  <div class="m-main">
    <div class="p12 intro-top bg-theme">
      <div class="product-tt">【享系列】享时光</div><!--产品名-->
      <div class="flex-box ">
        <div class="flex-hd">
          <img src="/static/img/product/u366.jpg">
        </div>
        <div class="flex-bd">
            <div><!--产品属性-->
              <span>品牌</span> 勐海巅味号茶业<br>
              <span>产地</span> 云南省 <span>年份</span> 2016<br>
              <span>工艺</span> 离地发酵<span>茶性</span> 熟普<br>
              <span>扫描次数</span> <span class="time">13938</span> 次<br>
              <span>自定义</span> 自定义 <br>
            </div><!--产品属性-->
        </div>
      </div>
    </div>

    <div class="moment">
      <div class="msg-pl">
        <a class="btn plain theme">消息列表
          <div class="noti_bubble">3</div>
        </a>
      </div>
      <div>
        <div class="date">
          今天
        </div>
        <a class="new-moment-pl">
          <img src="/static/img/icons/camera.png">
        </a>
      </div>

      <div> <!--一条朋友圈 start-->
        <div class="date">2017-11-29</div>
        <div class="content">
          <div class="msg">中国历史上有很长的饮茶纪录，在世界上的很多地方饮茶的习惯是从中国传过去的。</div>
          <div class="pic">
            <div class="Img" v-for="Img in Imgs" :key="Img.id">
              <img :src="Img.imgUrl">
            </div>
          </div>
        </div>
        <div class="btns">
          <a class="lk"><img src="/static/img/icons/lk.png">点赞 (<span>15</span>)</a>
          <a class="re"> <img src="/static/img/icons/re.png">回复</a>
          <a class="de"> <img src="/static/img/icons/de.png">删除溯源</a>
        </div>
        <div class="comment">
          <div class="reply">
            <span class="user">阿猫</span>
            但随着时代的发展,“茶”开始变得年轻化,甚至出现了很多富有创意的茶产品。
            <a class="del">删除</a>
            <span class="stat"> 展示中</span>
          </div>
          <div class="reply">
            <span class="user">阿狗</span>
            回复
            <span class="user">阿猫</span>
            胡说八道！
            <a class="del">删除</a>
            <a class="stat">展示此留言</a>
          </div>
        </div>
      </div><!--一条朋友圈 end-->

    </div>
    <section class="bt_nav ">
      <a class="btn theme block bottom-btn" href="#/mobile/product/scan">
        编写介绍
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mDetail',
    data () {
      return {
        Imgs: [
          {
            id: 1,
            imgUrl: '/static/img/product/4-1FQ31K023.png'
          },
          {
            id: 2,
            imgUrl: '/static/img/product/4-1FQ31K025.png'
          },
          {
            id: 3,
            imgUrl: '/static/img/product/4-1FQ31K026.png'
          },
          {
            id: 4,
            imgUrl: '/static/img/product/4-1FQ31K028.png'
          },
          {
            id: 5,
            imgUrl: '/static/img/product/4-1FQ31K029.png'
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

  .moment .reply a.del{
    margin-left: 10px;
    color: grey;
    font-size: 12px;
  }
  .moment .reply a.del:hover{
    color:#fa5555
  }
  .moment .reply span.stat{
    color:#0ccfb0;
    font-size:12px;
  }
  .moment .reply a.stat{
    color: grey;
    font-size:12px;
    text-decoration: underline;
  }
  .moment .reply a.stat:hover{
   color: black;
    text-decoration: none;
  }
  .new-moment-pl{
    display: inline-block;
    margin: 0 0 0 25px;
    width: 74px;
    height: 70px;
    background: #0ccfb0;
    padding: 14px;
  }
  .new-moment-pl img{
      width:100%;
  }
  .msg-pl{
    text-align: center;
    padding:12px 0 0;
  }
  .msg-pl a{
    position: relative;
    display:inline-block;
    padding:10px 16px 10px 12px;
  }
</style>
