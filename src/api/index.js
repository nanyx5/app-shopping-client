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
export const reqGetSearchInfo = (params) => requests({
    url:'/list',
    method:'POST',
    data:params
})
export const reqGoodsInfo = (skuId) => requests({
  url:`/item/${ skuId }`,
  method:"GET"
})
// 将产品添加到购物车中 或者更新
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
  url:`/cart/addToCart/${ skuId }/${ skuNum }`,
  method:"POST"
})

export const reqGetCartList = () => requests({
  url:'/cart/cartList',
  method:"GET"
})

export const reqDeleteCartById = (skuId) => requests({
  url:`/cart/deleteCart/${skuId}`,
  method:'DELETE'
})

export const reqUpdateCheckById =(skuId,isChecked) => requests({
  url:`/cart/checkCart/${skuId}/${isChecked}`,
  method:"GET"
})


export const reqGetCode = (phone) => requests({
  url:`/user/passport/sendCode/${phone}`,
  method:"GET"
})

export const reqUserRegister = (data) => requests({
  url:`/user/passport/register`,
  method:"POST",
  data
})

