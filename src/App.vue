<template>
  <div>
    <!-- <h1 v-upper="words"></h1> -->
    <Header></Header>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  components:{
    Header,
    Footer
  },
  data (){
    return{
      words:'Avsd'
    }
  },
  mounted(){
      this.$store.dispatch('categoryList')
  }

}
</script>

<style>

</style>