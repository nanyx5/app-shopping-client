// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers"
import store from '@/store'
import {removeToken} from '@/utils/token'

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
let router =  new VueRouter({
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

router.beforeEach(async (to,from,next) => {  
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if(token){
    if(to.path == '/login'){
      next('/')
    }else{
      if(name){
        next()
      }else{
        try{
          await store.dispatch('getUserInfo')
          next()
        }catch(error){
          await store.dispatch('userLogout')
          next('/login')
        }
      }
      // next()
    }
  }else{
    let toPath = to.path
    if(toPath.indexOf('/trade') != -1  || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1 || toPath.indexOf('/shopcart') != -1){
      next('/login?redirect='+toPath)
    }else{
      next()
    }
  }
})

export default router