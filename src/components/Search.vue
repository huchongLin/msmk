<template>
  <div id="app">
    <van-row class="search-top">
      <van-col span="24">
        <van-search placeholder="搜索商品" shape="round" show-action @cancel="onCancel"/>
      </van-col>
    </van-row>
    <van-row type="flex">
      <van-col offset="1" span="23" class="search-hot">热门搜索</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col offset="1" span="23" class="search-tag">
        <van-tag offset="1" plain round color="#cc3d3d" size="large" type="danger" style="font-size:0.75rem" @click="home">天梭力洛克</van-tag>
        <van-tag plain round color="#cc3d3d" size="large" type="danger" class="s-tag" @click="home">浪琴</van-tag>
        <van-tag plain round color="#cc3d3d" size="large" type="danger" class="s-tag" @click="home">欧米茄</van-tag>
        <van-tag plain round color="#000" size="large" type="danger" class="s-tag" @click="home">人气好物榜</van-tag>
        <van-tag plain round color="#000" size="large" type="danger" class="s-tag" @click="home">卡西欧</van-tag>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col offset="1" span="23" class="search-tag">
        <van-tag plain round color="#000" size="large" type="danger" style="font-size:0.75rem" @click="home">手表特卖</van-tag>
        <van-tag plain round color="#000" size="large" type="danger" class="s-tag" @click="home">4000元正装表推荐</van-tag>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
    methods:{
      onCancel(){
        this.$router.push({
          name:'Home'
        })
      },
      home(){
        this.$router.push({
          name:'ChooseNav'
        })
      }
  }
}
</script>

<style scoped>
  .search-top{
    border-bottom: 1px solid #ddd;
  }
  .search-hot{
    font-size: 12px;margin-top: 0.875rem;margin-bottom: 0.75rem;color: #999;
  }
  .search-tag{
    height: 1.75rem;
  }
  .s-tag{
    margin-left: 0.75rem;font-size:0.75rem
  }
</style>