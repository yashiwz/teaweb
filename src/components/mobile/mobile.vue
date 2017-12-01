<template>
  <div id="app" class="mobile">
    <router-view></router-view>
    <footer>
      <!--<a href="https://www.imphoton.com"><p>技术支持：www.imphoton.com</p></a>-->
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'mobile',
    data() {
      return {
      }
    }
  }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  footer{
    text-align:center;
    padding:30px 12px 0;
  }
  .mobile footer{
    margin-bottom: 63px;
  }

</style>
