<template>
  <div class="m-main">
    <div class="intro-top bg-theme">

      <div class="flex-box ">
        <div class="flex-hd">
          <img src="/static/img/product/u366.jpg">
        </div>
        <div class="flex-bd">
            <div><!--产品属性-->
              <div class="product-tt">【享系列】享时光</div><!--产品名-->
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
        <a href="#/mobile/message" class="btn plain theme">新消息
          <div class="noti_bubble">6</div>
        </a>
      </div>
      <div>
        <div class="bigdate">
          今天
        </div>
        <a class="new-moment-pl">
          <img src="/static/img/icons/camera.png">
        </a>
      </div>

      <div> <!--一条朋友圈 start-->
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
          <a class="re"  @click="showToggle"> <img src="/static/img/icons/re.png">回复</a>
          <a class="de" @click="showToggleDelete"> <img src="/static/img/icons/de.png">删除溯源</a>
        </div>
        <div class="comment">
          <!--一条评论 start-->
          <div class="reply" @click="showToggle">
            <span class="user tx-thm">阿猫</span>
            但随着时代的发展,“茶”开始变得年轻化,甚至出现了很多富有创意的茶产品。
          </div>
          <a class="del" @click="showToggleDelete">删除</a>
          <span class="stat"> 展示中</span><br>
          <!--一条评论 end-->
          <!--一条评论 start-->
          <div class="reply" @click="showToggle">
            <span class="user tx-thm">阿狗</span>
            回复
            <span class="user tx-thm">阿猫</span>
            胡说八道！
          </div>
          <a class="del" @click="showToggleDelete">删除</a>
          <a class="stat">展示此留言</a>
          <!--一条评论 end-->
        </div>
      </div><!--一条朋友圈 end-->

    </div>
    <section class="bt_nav ">
      <a class="btn theme block bottom-btn" href="#/mobile/product/scan">
        编写介绍
      </a>
    </section>

    <div v-show="isShowReply"><!--回复评论弹框-->
      <div class="cover" @click="showToggle"></div>
      <div class="bt_nav flex-box p12 popup replyMsg">
        <div class="flex-bd">
          <div class="sch">
            <el-input
              placeholder="输入回复"
              v-model="replyMsg">
            </el-input>
          </div>
        </div>
        <div class="flex-ft">
          <a class="btn theme" @click="showToggle">发送</a>
        </div>
      </div>
    </div>

    <div v-show="isShowDelete"><!--删除弹框-->
      <div class="cover" @click="showToggleDelete"></div>
      <div class="popup mid text-center" >
        <p>是否确定删除？删除后不可恢复</p>
        <a class="btn danger" @click="showToggleDelete">删除</a>
        <a class="btn info" @click="showToggleDelete">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mDetail',
    data () {
      return {
        likes: 15,//点赞
        replyMsg:'',//回复输入框
        isShowReply:false, //回复弹框
        isShowDelete:false, //删除弹框
        Imgs: [ //朋友圈图片
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
    },
    methods:{
      showToggle:function(){
        this.isShowReply = !this.isShowReply
      },
      showToggleDelete:function(){
        this.isShowDelete = !this.isShowDelete
      },
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped>
  .moment .content {
    /*border-left: 1px solid #e5e5e5;*/
  }

  .new-moment-pl{
    display: inline-block;
    margin:10px 0 0 25px;
    width: 74px;
    height: 70px;
    background: #0cc7a8;
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
    padding:14px 22px 14px 18px;
  }

</style>
