<template>
  <div class="m-main">
    <section class="article-pl">
        <h5>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h5>
        <div class="date">2017-11-26 07:40:58</div>
        <div class="article">
          <div>新华社武汉11月5日电（记者 梁建强）中国茶叶流通协会会长王庆5日透露，中国茶叶出口态势良好，其中，2016年度的统计数据显示，出口总量以及出口总价值均实现同比增长。
            <br>
            　　第五届中国有机农产品展销会暨中国青（米）砖茶交易会于11月3日至5日在湖北赤壁举办。
            </div>
          <img src="/static/img/article/40185_cover.jpg">
          <div>
            王庆介绍，中国的茶叶种植面积继续保持增长，截至2016年底，总面积已接近4400万亩。与此同时，最新统计数据也显示，2016年1至12月，中国茶叶的出口总量以及出口总价值均同比增长。其中，茶叶出口量超过32万吨，出口金额接近15亿美元。王庆说，2017年的相关数据，目前正在统计之中。初步了解，出口态势保持良好。
            <br>
            　　中国茶叶流通协会成立于1992年，是由茶叶行业生产、加工、经营、管理、科研、教学等领域的企业、事业单位、社会团体及个人联合组成的跨地区、跨部门、跨所有制的全国性社团组织，接受中华全国供销合作总社与民政部的业务指导和监督管理，属中国4A级行业协会。
          </div>
        </div>
    </section>
    <section class="bt_nav">
      <a class="c3" href="#/mobile/index">
        <img src="/static/img/icons/n_sch.png">
        <div class="tt">商品防伪</div>
      </a>
      <a class="c3" href="#/mobile/moments">
        <img src="/static/img/icons/n_moments.png">
        <div class="tt">溯源</div>
      </a>
      <a class="c3" href="#/mobile/me">
        <img src="/static/img/icons/n_user.png">
        <div class="tt">我的</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mArticle',
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
  h5{
    line-height: 20px;
    font-size: 15px;
    font-weight: bold;
  }
  .article-pl{
    background:white;
    padding:12px;
  }
  .date{
    color:#afafaf;
    margin-bottom:12px;
  }
  .article img{
    width:100%;
    margin:6px 0
  }
</style>
