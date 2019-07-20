<template>
  <div id="app">
    <header class="listSearch">
      <van-row type="flex" justify="space-around">
        <van-col span="2">
          <van-icon class="back-left" name="arrow-left" @click="backHandle"/>
        </van-col>
        <van-col span="20">
          <van-search placeholder="搜索商品" shape="round"/>
        </van-col>
        <van-col span="2">
          <van-icon class="back-right" name="qr"/>
        </van-col>
      </van-row>
    </header>
    <section>
      <div class="filterBar">
        <ul style="display:flex;justify-content:space-around">
          <li
            v-for="(item,index) in fiterKey"
            @click="addClass(index)"
            :class="{ bgColors:index==current}"
            :key="item"
          >{{item}}</li>
          <li style="border:0.05rem solid rgb(238,238,238); height:1rem; margin-top:1rem"></li>
          <li @click="fiterByTerm">
            <van-icon name="filter-o" style="margin-top:1rem"/>筛选
          </li>

          <van-popup class="fiter-popup" v-model="show" position="right" :overlay="true">
            <van-nav-bar title="筛选" style="background-color:rgb(241,241,241)">
              <van-icon
                name="cross"
                slot="left"
                size="1.5rem"
                color="rgb(153,153,153)"
                @click="onClickLeft"
              />
            </van-nav-bar>
            <ul class="filter-select">
              <li>
                <b>万表服务</b>
                <br>
                <van-button
                  plain
                  type="default"
                  class="filter-button"
                  v-for="(item,index) in serveKey"
                  :key="item"
                  @click="addClass(index)"
                  :class="{ filterbgColors:index==current}"
                >{{item}}</van-button>
              </li>
              <li>
                <b>全部分类</b>
                <br>
                <van-button
                  plain
                  type="default"
                  class="filter-button"
                  v-for="(item,index) in fenlei"
                  :key="item"
                  @click="addClass(index)"
                  :class="{ filterbgColors:index==current}"
                >{{item}}</van-button>
              </li>
              <li>
                <b>价格区域</b>
                <br>
                <div class="choseprice" style="display:flex;justify-content:flex-start;">
                  <input type="number" placeholder="最低价">&nbsp;— &nbsp;
                  <input type="number" placeholder="最高价">
                </div>
              </li>
            </ul>
            <div class="content_footer">
              <div class="leftButton">清空</div>
              <div class="rightButton">
                <span>确定</span>
              </div>
            </div>
          </van-popup>
        </ul>
      </div>

      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="list-content">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
          <a class="list-item" v-for="product in products" :href="`#/chooseNav/${product._id}`">
            <p class="p1">
              <img :src="serverUrl+product.coverImg">
            </p>
            <p class="p2">
              <em class="pinpai">{{product.name}}</em>
              {{product.descriptions}}
            </p>
            <p class="p3">
              ￥{{product.price}}
              <del>¥9,300</del>
            </p>
            <p class="p4">
              <van-tag color="#cc9952" plain>自营</van-tag>
              <van-tag class="tagtwo" color="#cc5252" plain>水蓝版</van-tag>
            </p>
          </a>
          <!-- <van-button type="default" size="large" loading-text="加载更多" @click="loadMore">加载更多</van-button> -->
        </van-list>
        </div>
      </van-pull-refresh>

    </section>
  </div>
</template>

<style scoped>
header {
  background-color: #ffffff;
}
section {
  padding-bottom: 3rem;
  background-color: rgb(241, 241, 241);
}
.list-content,
p,
em {
  margin: 0;
  padding: 0;
}
.listSearch {
  border-bottom: 0.05rem solid rgb(250, 250, 250);
}
.back-left,
.back-right {
  line-height: 3.375rem;
  font-size: 1.4rem;
}
.filterBar {
  font-size: 0.75rem;
  height: 2.75rem;
  line-height: 2.75rem;
  color: rgb(153, 153, 153);
  background: #ffffff;
}
.filterBar .bgColors {
  color: rgb(217, 0, 0);
}
.filter-select li {
  padding-bottom: 1rem;
  border-bottom: 0.07rem solid rgb(250, 250, 250);
}
.filter-button {
  background-color: rgb(247, 247, 247);
  width: 31%;
  margin-right: 2%;
  margin-top: 2%;
  font-size: 0.8rem;
}
.filterbgColors {
  color: rgb(273, 136, 136);
  border-color: rgb(273, 136, 136);
  background: #fff;
}
.content_footer {
  width: 100%;
  height: 4.12rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  z-index: 2;
  border-top: 0.05rem solid #ccc;
  background: #fff;
  color: #333;
  font-size: 1rem;
}
.content_footer .leftButton {
  width: 50%;
  line-height: 4.12rem;
}
.leftButton {
  float: left;
}
.rightButton {
  float: right;
}
.rightButton span {
  display: inline-block;
  width: 7.9rem;
  height: 2.62rem;
  line-height: 2.62rem;
  margin-top: 0.75rem;
  margin-right: 0.75rem;
  border-radius: 0.2rem;
  color: #fff;
  background: #d90000;
}
.list-content a:nth-child(odd) {
  float: left;
  margin-top: 0.5rem;
}
.choseprice input {
  width: 31%;
  margin-right: 2%;
  font-size: 0.8rem;
  border-radius: 7%;
  border: none;
  border: 0.05rem solid #cecece;
  text-align: center;
}
.list-content a:nth-child(even) {
  float: right;
  margin-top: 0.5rem;
  margin-left: 0.37rem;
}
.list-item {
  display: block;
  width: 49.067%;
  height: 20rem;
  background-color: #ffffff;
  overflow: hidden;
}
.list-item .p1 {
  position: relative;
  overflow: hidden;
  margin-top: 0.75rem;
  width: 11.5rem;
  height: 13.75rem;
  padding: 0;
}
.list-item img {
  position: absolute;
  width: 120%;
  height: 100%;
  right: -1rem;
}
.list-item .p2,
.list-item .p3 {
  padding: 0 0.75rem;
  margin: 0 auto;
}
.list-item .p2 {
  padding-top: 0.875rem;
  font-size: 0.65rem;
  color: #666;
  width: 10rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.pinpai {
  font-weight: 700;
  color: #333;
}
.list-item .p3 {
  font-size: 1rem;
  color: #333;
  line-height: 0.75rem;
  padding: 0.5rem 0.75rem;
  font-weight: 800;
}
.list-item .p3 del {
  font-weight: normal;
  font-size: 0.75rem;
  color: #ccc;
  margin-left: 4px;
}
.list-item .p4 {
  padding: 0 0.75rem;
}
.list-item .p4 .tagtwo {
  margin-left: 0.4rem;
}

.fiter-popup {
  width: 86%;
  height: 100%;
  color: rgb(153, 153, 153);
}
.filter-select {
  padding: 0 1rem;
}
</style>

<script>
import { get } from "axios";
import { serverUrl } from "../untils/config";
import { products } from "../services/products";
import { setTimeout } from 'timers';
import { finished } from 'stream';

export default {
  data() {
    return {
      current: 0,
      fiterKey: ["综合排序", "销量优先", "价格排序"],
      show: false,
      serveKey: ["闪电发货", "一口价", "预售", "特卖", "稀缺款"],
      fenlei: ["腕表", "表带", "精美礼品", "维修保养"],
      products: [],
      serverUrl,
      page: 1,
      pageCount: 1,
      isLoading: false,
      loading: false,
      finished: false,
      productsCount: 0,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    addClass: function(index) {
      this.current = index;
      //console.log(this);
    },
    fiterByTerm() {
      this.show = true;
    },
    onClickLeft() {
      this.show = false;
    },
    backHandle() {
      this.$router.back();
    },
    // loadMore() {
    //   this.page += 1;
    //   this.loadData();
    // },
    loadData() {
      get(serverUrl + `/api/v1/products?page=${this.page}`)
        .then(res => {
         // console.log(res);
          // console.log(res.data);
          this.products = this.products.concat(res.data.products);
          this.pageCount = res.data.pages;
          this.productsCount = res.data.totalCount;
          // console.log(res.data.totalCount)
          // console.log(this.product.length)
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      setTimeout( () => {
        if(this.products.length >= 10)
          this.page += 1;
          this.loadData();
        this.loading = false;
        // console.log(this.products.length)
        // console.log(res.data.totalCount)
        if(this.products.length*this.page >=this.productsCount) {
           this.finished = true;
        }
      },4000);
    }
  }
};
</script>
