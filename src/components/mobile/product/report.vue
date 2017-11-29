<template>
  <div class="m-main">
    <div class="report">
      <h4 class="tt-pl">报告信息</h4>
      <div class="p12">
        检测机构  中国某权威检测机构 <br>
        检测时间  2017-11-16 03:18<br>
        检测结果  合格
      </div>
      <h4 class="tt-pl">检测报告</h4>
      <div class="p12">
        点击图片查看完整报告
        <div><img src="/static/img/product/u342.png"></div>
      </div>
      <h4 class="tt-pl">补充说明</h4>
      <div class="p12">
        这是产品实物图
        <div><img src="/static/img/product/1-1FI11I940407.jpg"></div>
      </div>
    </div>
    <section class="bt_nav tab">
      <a class="c4" href="#/mobile/product/scan">
        <div class="tt">防伪</div>
      </a>
      <a class="c4" href="#/mobile/product/moment">
        <div class="tt">溯源</div>
      </a>
      <a class="active c4" href="#/mobile/product/report">
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
    name: 'mReport',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-main{
    margin-top:0;
    background:white;
  }
  .report{
      padding:1px 0;
  }
  .report img{
    max-width:100%;
    margin:6px 0
  }
</style>
