import Vue from 'vue'
import App from './App.vue'

import TypeNav from "@/components/TypeNav"
import Carsousel from '@/components/Carsousel'
import Pagination from "@/components/Pagination"
Vue.component(Carsousel.name,Carsousel)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

import router from './router'

import store from './store'

import mock from './mock/mockServer'
import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  // 注册路由
  router,
  store,
  mock
}).$mount('#app')
