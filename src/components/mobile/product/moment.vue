<template>
  <div class="m-main">
    <div class="avatar-pl bg-theme">
      <div class="avatar"><img src="/static/img/product/1-1FI1115QB02.png"></div>
      <div class="text-center">巅味号</div>
    </div>
    <div class="moment">
      <h4 class="tt-pl">新动态</h4>

      <div><!--一条朋友圈start-->
        <div class="bigdate">2017-11-29</div>
        <div class="content">
            <div class="msg">中国历史上有很长的饮茶纪录，在世界上的很多地方饮茶的习惯是从中国传过去的。</div>
            <div class="pic">
              <div class="Img" v-for="Img in Imgs" :key="Img.id">
                <img :src="Img.imgUrl">
              </div>
            </div>
        </div>
        <div class="btns">
          <a class="lk" v-on:click="likes += 1"><img src="/static/img/icons/lk.png">赞 (<span>{{ likes }}</span>)</a>
          <a class="re"> <img src="/static/img/icons/re.png">回复</a>
        </div>
        <div class="comment">
          <div class="reply">
            <span class="user tx-thm">阿猫</span>
            听君一席话，胜读十年书。
          </div><br>
          <div class="reply">
            <span class="user tx-thm">阿狗</span>
            回复
            <span class="user tx-thm">阿猫</span>
            英雄所见略同！
          </div>
        </div>
      </div><!--一条朋友圈end-->


      <div><!--一条朋友圈start-->
        <div class="bigdate">2017-11-20</div>
        <div class="content">
          <div class="msg">饮茶不但是传统饮食文化,同时,由于茶中含有多种抗氧化物质与抗氧化营养素,对于消除自由基有一定的效果。</div>
          <div class="pic">
            <div class="Img" v-for="Img in Imgs" :key="Img.id">
              <img :src="Img.imgUrl">
            </div>
          </div>
        </div>
        <div class="btns">
          <a class="lk" v-on:click="likes += 1"><img src="/static/img/icons/lk.png">赞 (<span>{{ likes }}</span>)</a>
          <a class="re"> <img src="/static/img/icons/re.png">回复</a>
        </div>
        <div class="comment">
          <div class="reply">
            <span class="user tx-thm">阿猫</span>
            听君一席话，胜读十年书。
          </div><br>
          <div class="reply">
            <span class="user tx-thm">阿狗</span>
            回复
            <span class="user tx-thm">阿猫</span>
            英雄所见略同！
          </div>
        </div>
      </div><!--一条朋友圈end-->

    </div>
    <section class="bt_nav tab">
      <a class="c4" href="#/mobile/product/scan">
        <div class="tt">防伪</div>
      </a>
      <a class="active c4" href="#/mobile/product/moment">
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
    name: 'mMoment',
    data () {
      return {
        likes: 30,//点赞
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
  .banner img{
  width:100%
  }

  .avatar-pl{
    padding: 20px 12px 15px;
    color: white;
    font-size: 18px;
  }
  .avatar{
    box-shadow: 0 1px 24px rgba(0, 0, 0, 0.17);
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 4px;
    border: 1px solid #6cdac0;
    margin-bottom: 8px;
    overflow: hidden;
  }
  .avatar img{
    width: 100%;
  }
  .moment .content {
    /*border-left: 1px solid #e5e5e5;*/
  }
</style>
