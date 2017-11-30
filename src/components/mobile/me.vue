<template>
  <div class="m-me">
    <div class="flex-box p12">
      <div class="flex-bd">
        <div class="sch">
          <el-input
            placeholder="请输入正品名称"
            prefix-icon="el-icon-search"
            v-model="searchString">
          </el-input>
        </div>
      </div>
      <div class="flex-ft">
        <a class="btn theme">搜索</a>
      </div>
    </div>
    <section>
      <el-collapse accordion v-model="activeNames">
        <el-collapse-item title="A系列" name="1">
          <div class="cart-pl" v-for="article in articles" :key="article.id">
            <a class="flex-box" href="#/mobile/article">
              <div class="flex-hd">
                <div class="Img">
                  <img :src="article.imgUrl">
                </div>
              </div>
              <div class="flex-bd">
                <p class="tt">{{article.title}}</p>
                <p class="ss">{{article.date}}</p>
              </div>
            </a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="B系列" name="2">
          <div class="cart-pl" v-for="article in articles" :key="article.id">
            <a class="flex-box" href="#/mobile/article">
              <div class="flex-hd">
                <div class="Img">
                  <img :src="article.imgUrl">
                </div>
              </div>
              <div class="flex-bd">
                <p class="tt">{{article.title}}</p>
                <p class="ss">{{article.date}}</p>
              </div>
            </a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="C系列" name="3">
          <div class="cart-pl" v-for="article in articles" :key="article.id">
            <a class="flex-box" href="#/mobile/article">
              <div class="flex-hd">
                <div class="Img">
                  <img :src="article.imgUrl">
                </div>
              </div>
              <div class="flex-bd">
                <p class="tt">{{article.title}}</p>
                <p class="ss">{{article.date}}</p>
              </div>
            </a>
          </div>
        </el-collapse-item>
      </el-collapse>
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
      <a class="c3 active" href="#/mobile/me">
        <img src="/static/img/icons/n_user_g.png">
        <div class="tt">我的</div>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mMe',
    data () {
      return {
        searchString: '',
        activeNames: ['1'],
        articles: [
          {
            id: 1,
            title:'专业的新型防伪防窜货平台，满足企业所需，解决发展中遇到的假货、窜货难题。',
            date:'2017-11-28 09:40:58',
            imgUrl: '/static/img/article/tea-cup.jpg'
          },
          {
            id: 2,
            title:'中国茶叶出口态势良好实现同比增长',
            date:'201711-27 07:40:58',
            imgUrl: '/static/img/article/87c985531c3e166d7965e19ff544957e.jpg'
          },
          {
            id: 3,
            title:'金骏眉的独特功效|金骏眉的功效与作',
            date:'2017-11-26 07:40:58',
            imgUrl: '/static/img/article/1400w_x1400h_ftbreakfast0006.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .Img img{
    width:114px;
  }

</style>
