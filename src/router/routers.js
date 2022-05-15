import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

export default [
  {
    path: '/center',// 小写
    component: Center,
    meta:{show:true},
    children:[
      {
        path:'myorder',
        component:myOrder
      },
      {
        path:'groupOrder',
        component:groupOrder
      },
      {
        path:'/center',
        redirect:'/center/myorder'
      }
    ]
  },
  {
    path: '/paysuccess',// 小写
    component: PaySuccess,
    meta:{show:true}
  },
  {
    path: '/pay',// 小写
    component: Pay,
    meta:{show:true},
    beforeEnter:(to,from,next) => {
      to.meta.title = 'sah'
      console.log('this',to);
      
      if(from.path.indexOf('/trade') !== -1){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: '/trade',// 小写
    component: Trade,
    meta:{show:true},
    beforeEnter:(to,from,next) => {
      if(from.path.indexOf('/shopcart') !== -1){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: '/shopcart',// 小写
    component: ShopCart,
    meta:{show:true}
  },
  {
    path: '/addcartsuccess',// 小写
    name:'addcartsuccess',
    component: AddCartSuccess,
    meta:{show:true}
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta:{show:true}
  },
  {
    path: '/home',
    component: Home,
    meta:{show:true}
  },
  {
    path: '/search/:keyword?',
    component: ()=> import('@/pages/Search'),
    name:'search',
    meta:{show:true}
  },
  {
    path: '/login',
    component: Login,
    meta:{show:false}    },
  {
    path: '/register',
    component: Register,
    meta:{show:false}
  },
  {
    path:"*",
    redirect:'/home',
    meta:{show:true}
  }
]