import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aboutUs from '@/components/aboutUs'
import ark from '@/components/ark'
import model from '@/components/model'
import application from '@/components/application'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },{
      path: '/aboutUs',
      name: '关于我们',
      component: aboutUs
    },{
      path: '/ark',
      name: '智能服务',
      component: ark
    },{
      path: '/model',
      name: '商业模式',
      component: model
    },{
      path: '/application',
      name: '申请合作',
      component: application
    },
  ],
  mode: 'history',
})
