import {reqGetSearchInfo} from '@/api'
// state: 仓库存储数据的地方
const state = {
  searchList:{}
};
// mutations：修改state的唯一手段
const mutations  = {
  GETSEARCHLIST(state,searchList){
    state.searchList = searchList
  }
};
// action：可以书写自己的业务逻辑，也可以处理异步
const actions ={
  async getSearchList({commit},params={}){
    let result = await reqGetSearchInfo(params)
    if(result.code === 200){
      commit('GETSEARCHLIST',result.data)
    }
  }
};
// getters ： 理解为计算属性，用于简化仓库数据，
// 让组件获取仓科的数据更加方便,简化仓库的数据
// 
const getters = {
  goodsList(state){
    return state.searchList.goodsList || []
  },
  attrsList(state){
    return state.searchList.attrsList || []
  },
  trademarkList(state){
    return state.searchList.trademarkList || []
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}