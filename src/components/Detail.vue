<template>
  <div id="app">
    <!-- header -->
    <div class="tagNav">
      <van-icon class="back-left" name="arrow-left" @click="backHandle"/>
      <van-tabs v-model="active" swipeable color="black">
        <van-tab title="商品" >
      <div style="overflow:scroll;height:100%;padding-bottom:3rem">
      <!-- 轮播图 -->
      <van-swipe :autoplay="30000" indicator-color="black" class="bannerBox">
        <van-swipe-item v-for="(img,index) in 4" :key="index">
          <img class="bannerImg" :src="serverUrl+'/'+(product.coverImg)">
        </van-swipe-item>
      </van-swipe>
      <!-- 价格描述 -->
      <van-cell-group>
        <van-cell>
          <div class="goods-price">￥{{ this.product.price }}</div>
          <div class="goods-descriptions">{{ this.product.descriptions }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col style="color: #999;" span="10">顺丰包邮</van-col>
          <van-col style="color: #999;" span="14">剩余：{{ this.product.quantity }}</van-col>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="goods-cell-group" style="display:flex">
        <van-cell title="选择商品规格" @click="selectProd" style="color:#666"/>
        <van-icon name="ellipsis" style="margin-top:1rem;margin-right:1rem;"/>
      </van-cell-group>

      <!-- 商品规格 -->
      <van-popup v-model="showPopup" position="bottom" :overlay="true">
        <div class="type_content">
          <div class="choice_content">
            <div class="choice_content_a">
              <div class="choice_content-a_img">
                <img
                  :src="serverUrl+'/'+(product.coverImg)"
                >
              </div>
              <div class="choice_content-a_title">
                <div class="choice_content-a_title_price">￥{{ this.product.price }}</div>
                <div class="choice_content-a_title_bian">
                  <span>商品编号：{{this.product._id}}</span>
                  <span>  有现货</span>
                </div>
              </div>
              <!-- 点击收起 -->
            <van-icon name="cross" size="20px" @click="hidePopup" style="position: absolute;top: -2.5rem;right: 5px;margin-top: 3px;"/>
            </div>
            <div class="choice_content_b">
              <div class="choice_content_b_title">款式</div>
              <div class="choice_content_b_content">
                <span v-for="(item,index) in watchType"  @click="addClass(index)" :class="{ colour:index==current}" :key="index">{{ item }}</span>
                <span>{{ this.product.descriptions }}</span>
              </div>
              <div class="choice_content_b_num">
                <div class="choice_content_b_num_a">购买数量</div>
                <van-stepper v-model="stepValue" />
              </div>
            </div>
          </div>
        </div>
      </van-popup>
       </div>
        </van-tab>

        <van-tab title="详情">
          <van-tabs v-model="active1" sticky title-active-color="#f44" type="line">
            <van-tab title="商品介绍">
              <p>
                <img style="width:100%" src="../../src/data/img/4.jpg">
                <img style="width:100%" src="https://image8.wbiao.co/shop/5d055b5300ec4dc3b3241219cbb87e8b.jpg">
                <img style="width:100%" src="https://image8.wbiao.co/shop/26052e0a897e4f0f938d6cf9b9cce3ca.jpg">
                <img style="width:100%" src="https://image8.wbiao.co/shop/9a08dbfd236944559127c15c8276e81d.jpg">
              </p>
            </van-tab>
            <van-tab title="规格参数">
                <img width="100%" src="../../src/data/img/5.jpg">
            </van-tab>
            <van-tab title="售后服务">
               <img width="100%" src="../../src/data/img/6.jpg">
            </van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="评价">
          <van-tabs v-model="active1" sticky title-active-color="#f44" type="line">
            <van-tab title="全部(243)">
                <img width="100%" src="../../src/data/img/2.jpg">
            </van-tab>
            <van-tab title="有图(5)">
               <img width="100%" src="../../src/data/img/2.jpg">
            </van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="门店">
          <van-tabs v-model="active1" sticky title-active-color="#f44" type="line">
            <van-tab title="体验门店">
                <img width="100%" src="../../src/data/img/1.jpg">
            </van-tab>
            <van-tab title="名匠门店">
               <img width="100%" src="../../src/data/img/3.jpg">
            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
      <van-icon class="more-right" name="ellipsis" @click="moreMenuHandle"/>
    </div>

    <van-goods-action style="z-index:999">
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        @click="onClickServeriBtn"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="onClickCartBtn"
      />
      <van-goods-action-mini-btn
        :class="{'befor':!isshow,'after':isshow}"
        icon="like"
        text="收藏"
        @click="onClickLikeBtn"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="addToCartBtn(product._id)"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="onClickBuyBtn"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { get } from "axios";
import { getProductDetail } from "../services/products";
import { serverUrl } from "../untils/config";
import { addToShopCart } from "../services/products";
import { getCartCount } from "../services/products";

export default {
  data() {
    return {
      product: {},
      active: 0,
      active1:0,
      serverUrl,
      shopCartCount: 0,
      isshow: false,
      showPopup: false,
      stepValue:1,
      current:0,
      watchType: ["钢 白色 不锈钢","真皮 蓝色 牛皮","真皮 蓝色 牛皮"]
    };
  },
 created() {
    getProductDetail(this.$route.params.id)
      .then(res => {
        this.product = res.data;
        // console.log(this.product);
      })
      .catch(err => {
        console.log(err);
      });
    this.$eventBus.$on("addToCartEnd", () => {
      this.shopCartCount = getCartCount();
    });
  },
  methods: {
    backHandle() {
      this.$router.back();
    },
    moreMenuHandle() {},
    selectProd() {},
    onClickLikeBtn() {
      if (this.isshow == false) {
        this.isshow = "true";
        this.$toast("收藏成功");
      } else {
        this.isshow = !this.isshow;
        this.$toast("取消收藏");
      }
    },
    
    addToCartBtn(product) {
      if(sessionStorage.getItem('token')) {
        // 调用加入购物车
        addToShopCart(product,1)
          .then(res => {
            // console.log(res)
            this.$toast(res.data.message)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        // 跳转到登录页
        alert('需要先登录')
      }
    },
    onClickBuyBtn() {
      this.$toast("购买");
    },
    onClickServeriBtn() {
      this.$toast("当前客服休息中");
    },
    onClickCartBtn() {
      this.$router.push({
        path: "/cart"
      });
    },
    selectProd() {
      this.showPopup = true
    },
    hidePopup() {
      this.showPopup = false
    },
    addClass: function(index) {
      this.current = index;
    },
  }
};
</script>

<style scoped>
.back-left,
.more-right {
  font-size: 1.4rem;
  line-height: 2.75rem;
  position: absolute;
}
.back-left {
  z-index:999;
  left:0.5rem;
}
.more-right {
  right:0.6rem;
  top: 0rem;
  /* float: right; */
   z-index:999
}
.tagNav {
  height: 2.75rem;
  line-height: 2.75rem;
  background-color: #fff;
  padding: 0 1rem;
  border-bottom: 0.02rem solid #cecece;
}
.bannerBox {
  height: 24rem;
}
.bannerImg {
  width: 100%;
}
.goods-price {
  font-size: 1.75rem;
  color: #d90000;
  margin-bottom: 0.5rem;
}
.goods-descriptions {
  font-size:.9rem;
  font-weight: 800;
  color:#666;
}
.goods-express {
  font-size: .9rem;
  padding: 0.31rem 0.937rem;
}
.goods-cell-group {
  margin: 1rem 0;
}
.befor {
  color: normal;
}
.after {
  color: rgb(255, 68, 68);
}
/* 弹出层 */
.type_content {
  width: 100%;
  height: 25rem;
  color: #666;
  z-index: 99;
  background: #fff;
  text-align: center;
}
.choice_content {
  width: 94%;
  padding: 0 3%;
  height: 25rem;
  position: absolute;
  bottom: -2.5rem;
}
.choice_content_a {
  width: 100%;
  display: block;
  position: relative;
  font-size: 1em;
}
.choice_content-a_img {
  position: absolute;
  left: 0;
  top: -2.7rem;
  border: 1px solid #ddd;
  padding: .2em;
  background-color: #fff;
  border-radius: .2em;
  width: 4.88rem;
}
.choice_content-a_img img {
  width: 4.88rem;
  height: 4.88rem;
  vertical-align: top;
  margin: 0 auto;
  max-width: 4.88rem;
  display: block;
  border:none;
}
.choice_content-a_title {
  width: 100%;
  margin-left: 6rem;
  text-align: left;
}
.choice_content-a_title_price {
  color: #d90000;
  font-size: 1rem;
  font-weight: 700;
  margin-top: .65rem;
}
.choice_content-a_title_bian {
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}
.choice_content .choice_content_b {
  width: 100%;
  display: inline-block;
  margin-top: 8%;
  height: 13.5rem;
  overflow-y: scroll;
}
.choice_content_b_title {
  text-align: left;
  color: #999;
  font-size: 14px;
}
.choice_content_b_content {
  width: 100%;
  margin-top: 15px;
  text-align: left;
}
.choice_content_b_content span {
  color: #999;
  font-size: 12px;
  padding: 3px 6px;
  border: 1px solid #f1f1f1;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.choice_content_b_content .colour {
  background-color: #d90000;
  color: #fff;
  border: 1px solid #d90000;
}
.choice_content_b_num {
  width: 100%;
  display: inline-block;
  margin-top: 8px;
  text-align: left;
}
.choice_content_b_num_a {
  color: #999;
  font-size: 14px;
  margin-bottom: .5rem;
}
</style>
