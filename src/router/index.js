import Vue from 'vue'
import Router from 'vue-router'

import mobile from '@/components/mobile/mobile'
import mIndex from '@/components/mobile/index'
import mMoments from '@/components/mobile/moments'
import mMe from '@/components/mobile/me'
import mArticle from '@/components/mobile/article'
import mReport from '@/components/mobile/report'
import mScan from '@/components/mobile/product/scan'
import mMoment from '@/components/mobile/product/moment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mobile/',
      component: mobile,
      children: [
        {
          path: 'index',
          name: 'mIndex',
          component: mIndex
        },
        {
          path: 'moments',
          name: 'mMoments',
          component: mMoments
        },
        {
          path: 'me',
          name: 'mMe',
          component: mMe
        },
        {
          path: 'article',
          name: 'mArticle',
          component: mArticle
        },
        {
          path: 'report',
          name: 'mReport',
          component: mReport
        },
        {
          path: 'product/scan',
          name: 'mScan',
          component: mScan
        },
        {
          path: 'product/moment',
          name: 'mMoment',
          component: mMoment
        }
        // {
        //   path: 'list',
        //   name: 'mList',
        //   component: mList
        // },
        // {
        //   path: 'product',
        //   name: 'mProduct',
        //   component: mProduct
        // },
        // {
        //   path: 'cart',
        //   name: 'mCart',
        //   component: mCart
        // },

        // {
        //   path: 'orders',
        //   name: 'mOrders',
        //   component: mOrders
        // },
        // {
        //   path: 'orderdetail',
        //   name: 'mOrderdetail',
        //   component: mOrderdetail
        // },
        // {
        //   path: 'orderstart',
        //   name: 'mOrderstart',
        //   component: mOrderstart
        // },
        // {
        //   path: 'orderconfirm',
        //   name: 'mOrderconfirm',
        //   component: mOrderconfirm
        // }
      ]
    }
  ]
})
