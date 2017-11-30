<template>
  <div class="m-main">
      <div class="bg-banner bg-theme">
          <img src="/static/img/icons/applylogo.png">
        企业登录入口
        <div class="arrow-up"></div>
      </div>
      <div class="apply">
        <div class="sch">
          <img src="/static/img/icons/usered.png">
          <el-input
            placeholder="请输入账号"
            v-model="username">
          </el-input>
        </div>
        <div class="sch">
          <img src="/static/img/icons/password.png">
          <el-input type="password"
            placeholder="请输入密码"
            v-model="password">
          </el-input>
        </div>
        <div class="text-right mb12">
          <a class="forget" @click="showToggle">忘记密码</a>
        </div>
        <div class="mb12">
          <a class="btn theme block">登录</a>
        </div>
        <div class="mb12">
          <a href="#/mobile/apply" class="btn danger block">入驻申请</a>
        </div>
        <div>
          <a href="#/mobile/index" class="btn info block">返回</a>
        </div>
      </div>
    <div v-show="isShow">
      <div class="cover"></div>
      <div class="popup text-center" >
        <p>请联系工作人员修改密码</p>
        <a class="btn info"  @click="showToggle">关闭</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mApply',
    data () {
      return {
        username: '',
        password: '',
        radio: '1',
        isShow:false, //弹框
      }
    },
    methods:{
      showToggle:function(){
        this.isShow = !this.isShow
      },
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-main{
    margin-top:0;
  }

  .forget{
    color:grey;
  }
  .popup{
    top: 280px;
    left: 40%;
    margin-left: -122px;
    position: fixed;
    background: white;
    padding: 30px 15px;
    z-index: 99;
    width: 308px;
    -webkit-box-shadow: 0 2px 18px rgba(162, 162, 162, 0.4);
    box-shadow: 0 2px 37px rgba(73, 144, 132, 0.3);
    -webkit-animation: moveUp 0.4s ease;
    animation: moveUp 0.4s ease;
  }
  .cover{
    position:fixed;
    z-index:98;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:rgba(10, 45, 39, 0.4);
  }
</style>
