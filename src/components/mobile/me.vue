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
          <div class="cart-pl" v-for="product in products" :key="product.id">
            <a class="flex-box" :href="product.link">
              <div class="flex-hd">
                <div class="Img">
                  <img :src="product.imgUrl">
                </div>
              </div>
              <div class="flex-bd">
                <p class="tt">{{product.title}}</p>
                <p class="ss">{{product.date}}</p>
              </div>
            </a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="B系列" name="2">
          <div class="cart-pl" v-for="product in products" :key="product.id">
            <a class="flex-box" :href="product.link">
              <div class="flex-hd">
                <div class="Img">
                  <img :src="product.imgUrl">
                </div>
              </div>
              <div class="flex-bd">
                <p class="tt">{{product.title}}</p>
                <p class="ss">{{product.date}}</p>
              </div>
            </a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="C系列" name="3">
          <div class="cart-pl" v-for="product in products" :key="product.id">
            <a class="flex-box" :href="product.link">
              <div class="flex-hd">
                <div class="Img">
                  <img :src="product.imgUrl">
                </div>
              </div>
              <div class="flex-bd">
                <p class="tt">{{product.title}}</p>
                <p class="ss">{{product.date}}</p>
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
      <a class="c3 active">
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
        products: [
          {
            id: 1,
            title:'享悦',
            date:'2017-11-28 09:40:58 <更新时间>',
            imgUrl: '/static/img/product/u366.jpg',
            link:'#/mobile/detail'
          },
          {
            id: 2,
            title:'景迈',
            date:'201711-27 07:40:58 <更新时间>',
            imgUrl: '/static/img/product/whitechocolate.jpg',
            link:'#/mobile/detail'
          },
          {
            id: 3,
            title:'勐宋',
            date:'2017-11-26 07:40:58 <更新时间>',
            imgUrl: '/static/img/product/pumpkin.jpg',
            link:'#/mobile/detail'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .Img img{
    width: 70px;
  }
  .cart-pl .flex-box{
    padding:12px;
    height: 84px;
  }
</style>
