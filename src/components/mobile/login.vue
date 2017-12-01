<template>
  <div class="m-main login-pg">
      <div class="bg-banner bg-theme">
          <img src="/static/img/icons/lock.png">
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
        <div class="">
          <a class="btn theme block" href="#/mobile/me">登录</a>
        </div>
      </div>

    <section class="bt_nav p12">
      <div class="text-right">没有账号？
        <a href="#/mobile/apply" class="btn danger">申请入驻</a>
        <a href="#/mobile/index" class="btn info">返回</a>
      </div>
    </section>
    <div v-show="isShow">
      <div class="cover" @click="showToggle"></div>
      <div class="popup mid text-center" >
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


  .login-pg .apply{
    /*margin: 0 12px;*/
  }
  .login-pg .bt_nav .danger{
    margin:0 8px;
  }
</style>
