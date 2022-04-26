// axios二次封装
import axios  from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store  from "@/store";
const requests = axios.create({
  // 基础路径
  baseURL:'/api',
  timeout:5000
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
  if(store.state.detail.uuid_token){
    config.headers.userTempId = store.state.detail.uuid_token
  }
  nprogress.start();
  return config
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
  nprogress.done();
  return res.data
},(err) => {
  return Promise.reject(new Error("faile" +err))
})

export default requests