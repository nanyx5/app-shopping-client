import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'
// state: 仓库存储数据的地方
const state = {
  categoryList:[],
  bannerList:[],
  floorList:[]
};
// mutations：修改state的唯一手段
const mutations  = {
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  GETFLOORLIST(state,floorList){
    state.floorList = floorList
  }
};
// action：可以书写自己的业务逻辑，也可以处理异步
const actions ={
  async categoryList({commit}){
    let result = await reqCategoryList() 
    if(result.code == 200){
      commit("CATEGORYLIST",result.data)
    }
  },
  async getBannerList({commit}){
   let result =  await reqGetBannerList()
   if(result.code == 200){
    commit("GETBANNERLIST",result.data)
    }
  },
  async getFloorList({commit}){
    let result =  await reqFloorList()
    if(result.code == 200){
      commit("GETFLOORLIST",result.data)
      }
  }
};
// getters ： 理解为计算属性，用于简化仓库数据，让组件获取仓科的数据更加方便
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}