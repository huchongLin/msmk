<template>
  <div id="app">
    <div id="topbar" class="clearfix cars-header goback">
      <van-nav-bar title="购物车" @click-left="goBack" left-arrow>
      </van-nav-bar>
    </div>
    <span slot="tip" class="tip" v-show="!isshow">
      登录后购物车的商品将保存到您账号中，
      <router-link :to="{name:'Login'}">现在登录</router-link>
    </span>

    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        v-model="checked"
        class="card-goods__item"
        v-for="item in addToCart"
        :key="item._id"
        :name="item._id"
      >
        <van-card
          :title="item.product.name"
          :desc="item.product.descriptions"
          :num="item.quantity"
          :price="item.product.price"
          :thumb="loginUrl+item.product.coverImg"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    >
     <van-checkbox
     style="z-index:999;position:absolute;left:0.5rem;"
    @click="selectAllHandle"
    v-model="isCheckedAll"
    >全选</van-checkbox>
     </van-submit-bar>
  </div>
</template>
<script>
import { loginUrl } from "../utils/config";
import { isLoginIn } from '../../src/utils/auth'
import { getShopCart } from "../services/products";
export default {
  // components: {
  //   [Card.name]: Card,
  //   [Checkbox.name]: Checkbox,
  //   [SubmitBar.name]: SubmitBar,
  //   [CheckboxGroup.name]: CheckboxGroup
  // },
 
  data() {
    return {
      value: 1,
      checked: false,
      isCheckedAll:false,
      addToCart: [],
      loginUrl,
      isshow: isLoginIn(),
      checkedGoods: [],
      goods: [],
      quantity:0,
    };
  },

  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.addToCart.reduce((total, item) => total + (this.checkedGoods.indexOf(item._id) !== -1 ? item.product.price*1000/10*item.quantity : 0), 0);
    },
  },
  async created() {
    const result = await getShopCart();
    this.addToCart = result.data;
    // console.log(result.data);
    console.log(this.addToCart.length);
  },

  methods: {
    onSubmit() {
      this.$toast('点击结算');
    },
    selectAllHandle() {
      if(this.isChecked == true) {
        for(var i=0;i<this.addToCart.length;i++) {
          this.Checked == true;
        }
      }
    },
    goBack() {
      window.history.back();
    },
  }
};
</script>

<style scoped>
.tip {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  display: block;
  text-align: center;
  font-size: 0.8rem;
  background: rgb(250, 238, 188);
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  width:100%;
  padding-bottom: 3rem;
}
.card-goods__item {
  background-color: #fafafa;
  margin-bottom:0.5rem;
  width:100%;
}

</style>