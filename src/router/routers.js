import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

export default [
  {
    path: '/pay',// 小写
    component: Pay,
    meta:{show:true}
  },
  {
    path: '/trade',// 小写
    component: Trade,
    meta:{show:true}
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
    component: Search,
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