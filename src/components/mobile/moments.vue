<template>
  <div class="m-main">


    <section class="bt_nav">
      <a class="c3" href="#/mobile/index">
        <img src="/static/img/icons/n_sch.png">
        <div class="tt">商品防伪</div>
      </a>
      <a class="c3 active">
        <img src="/static/img/icons/n_moments_g.png">
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
    name: 'mMoments',
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
  }

</style>
