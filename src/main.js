import Vue from 'vue'
import App from './App.vue'

import TypeNav from "@/components/TypeNav"
import Carsousel from '@/components/Carsousel'
import Pagination from "@/components/Pagination"
Vue.component(Carsousel.name,Carsousel)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

import { MessageBox } from 'element-ui';

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import * as API from "@/api"

import router from './router'

import store from './store'

import mock from './mock/mockServer'
import 'swiper/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif'
import myPlugins from '@/plugins/myPlugins'
import "@/plugins/validate"
Vue.use(myPlugins,{
  name:'upper'
})
// or with options
Vue.use(VueLazyload, { 
  loading: atm
})
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  store,
  mock
}).$mount('#app')
