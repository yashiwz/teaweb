<template>
  <div class="m-main">
      <div class="bg-banner bg-theme">
          <img src="/static/img/icons/applylogo.png">
          申请入驻
        <div class="arrow-up"></div>
      </div>
      <div class="apply">
        <div class="sch">
          <img src="/static/img/icons/usered.png">
          <el-input
            placeholder="请输入申请人姓名"
            v-model="username">
          </el-input>
        </div>
        <div class="sch">
          <img src="/static/img/icons/tele.png">
          <el-input
            placeholder="请输入联系电话"
            v-model="contactphone">
          </el-input>
        </div>
        <div class="text-center mb12">
          <el-radio v-model="radio" label="1">厂商</el-radio>
          <el-radio v-model="radio" label="2">经销商</el-radio>
          <el-radio v-model="radio" label="3">零售商</el-radio>
        </div>
        <div class="text-center mb20" style="color:grey;">提交申请后将有专人与您联系</div>
        <div class=" mb12">
          <a class="btn theme block" href="#/mobile/index">提交申请</a>
        </div>
        <div class="text-center">已入驻？<a href="#/mobile/login" class="a-text">登录</a></div>
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
  .a-text{
    color:#0ccfb0;
  }
</style>
