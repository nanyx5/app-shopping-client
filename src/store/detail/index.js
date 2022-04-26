/* eslint-disable no-unused-vars */
import { reqGoodsInfo,reqAddOrUpdateShopCart } from '@/api'
import {getUUID} from "@/utils/uuid_token"
const state = {
  goodInfo: {},
  uuid_token:getUUID()
}
const mutations = {
  GETGOODINFO (state, goodInfo) {
    state.goodInfo = goodInfo    
  }

}
const actions = {
  async getGoodInfo ({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code == '200') {
      commit('GETGOODINFO', result.data)
    }
  },
  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    let result = await reqAddOrUpdateShopCart(skuId,skuNum)    
    if(result.code == "200"){
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }    
  }
  

}
// 简化数据而生，并不是处理数据
const getters = {
  categoryView(state){
    return  state.goodInfo.categoryView || {}
  },
  skuInfo(state){
    return  state.goodInfo.skuInfo || {}
  },
  //  产品的售卖属性简化
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

