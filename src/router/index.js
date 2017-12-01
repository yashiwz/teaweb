import Vue from 'vue'
import Router from 'vue-router'

import mobile from '@/components/mobile/mobile'
import mIndex from '@/components/mobile/index'
import mMoments from '@/components/mobile/moments'
import mMe from '@/components/mobile/me'
import mArticle from '@/components/mobile/article'
import mInform from '@/components/mobile/inform'
import mScan from '@/components/mobile/product/scan'
import mMoment from '@/components/mobile/product/moment'
import mReport from '@/components/mobile/product/report'
import mIntro from '@/components/mobile/product/intro'
import mApply from '@/components/mobile/apply'
import mLogin from '@/components/mobile/login'
import mDetail from '@/components/mobile/detail'
import mMessage from '@/components/mobile/message'
import mMessageDetail from '@/components/mobile/messageDetail'
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
          path: 'inform',
          name: 'mInform',
          component: mInform
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
        },
        {
          path: 'product/report',
          name: 'mReport',
          component: mReport
        },
        {
          path: 'product/intro',
          name: 'mIntro',
          component: mIntro
        },
        {
          path: 'apply',
          name: 'mApply',
          component: mApply
        },
        {
          path: 'login',
          name: 'mLogin',
          component: mLogin
        },
        {
          path: 'detail',
          name: 'mDetail',
          component: mDetail
        },
        {
          path: 'message',
          name: 'mMessage',
          component: mMessage
        },
        {
          path: 'messagedetail',
          name: 'mMessageDetail',
          component: mMessageDetail
        }
      ]
    }
  ]
})
