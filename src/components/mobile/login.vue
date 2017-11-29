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
          <el-input
            placeholder="请输入密码"
            v-model="contactphone">
          </el-input>
        </div>
        <div class="text-right mb12">
          <a class="forget">忘记密码</a>
        </div>
        <div class="mb12">
          <a class="btn theme block">登录</a>
        </div>
        <div class="mb12">
          <a class="btn danger block">入驻申请</a>
        </div>
        <div>
          <a href="#/mobile/index" class="btn info block">返回</a>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'mApply',
    data () {
      return {
        radio: '1'
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
</style>
