import requests from "./request";
import mockRequests from "./mockRequest.js"

export const reqCategoryList = () => {
  return requests({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}

export const reqGetBannerList = () =>  mockRequests.get('/banner')
export const reqFloorList = () =>  mockRequests.get('/floor')
// 获取搜索数据
// {
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   "trademark": "4:小米"
// }
export const reqGetSearchInfo = (params) => requests({
    url:'/list',
    method:'POST',
    data:params
})
