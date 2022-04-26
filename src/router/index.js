// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers"
Vue.use(VueRouter)



let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location,resolve,reject){
  if(resolve && reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,() => {},()=>{})
  }
}

VueRouter.prototype.replace = function (location,resolve,reject){
  if(resolve && reject){
    originReplace.replace(this,location,resolve,reject)
  }else{
    originReplace.replace(this,location,() => {},()=>{})
  }
}
export default new VueRouter({
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { y: 0 }
  },
})