<template>
  <div id="app">
    <router-view></router-view>
    <div class="nav-bar">
      <van-tabbar v-model="active" @change="navChangeHandle">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="bars">选表</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

//import { productNum } from './utils/user'
export default {
  data(){
    return{
      active:0
    }
  },
  methods:{
    navChangeHandle() {
      switch(this.active) {
        case 0:
          this.$router.push({
            name: 'Home'
          })
        break;
        case 1:
          this.$router.push({
            name: 'ChooseNav'
          })
        break;
        case 2:
          this.$router.push({
            name: 'Cart'
          })
        break;
        case 3:
          this.$router.push({
            name: 'UserCenter'
          })
        break;
      }
    }
  }
}
</script>

