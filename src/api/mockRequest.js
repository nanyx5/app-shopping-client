// axios二次封装
import axios  from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"
const requests = axios.create({
  // 基础路径
  baseURL:'/mock',
  timeout:5000
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
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