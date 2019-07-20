<template>
  <div id="app">
    <div class="u-top">
      <van-row>
        <van-col span="24" class="setting"><van-icon name="setting-o"/>&nbsp;&nbsp;</van-col>
      </van-row>
      <van-row v-model="userName">
        <van-col span="6" class="header">
          <img src="../data/head.gif">
        </van-col>
        <van-col span="6" class="header">
          <div>
            <p id="uLoginReg">{{userName}}</p>
            <p class="uSale" @click="uLogin" style="color:#a8a8a8">普卡会员</p>
          </div>
        </van-col>
      </van-row>
      <div class="uCenter" >
        <van-row type="flex" justify="space-around">
          <van-col span="8" class="setting">
          <van-icon style="font-size:1rem" name="edit"/>
            个人资料
          </van-col>
          <van-col span="8" class="setting">
            <van-icon style="font-size:1rem" name="location-o"/>
            收货地址
          </van-col>
          <van-col span="8" class="setting">
            <van-icon style="font-size:1rem" name="flower-o"/>
            我的收藏
          </van-col>
        </van-row>
      </div>
    </div>
    <van-row class="uDetail">
      <van-col span="24">
        <div class="uDetail1">
          <div>
            完善资料可获得2500积分哦~<u>马上完善</u>
          </div>
        </div>
      </van-col>
    </van-row>
    <van-row class="uOrders">
      <van-col span="23" class="uOrder">
        我的订单
        <van-icon name="arrow" class="uoRight"/>
      </van-col>
    </van-row>
    <div class="uTabbar">
      <van-tabbar fixed class="uVan" active-color="#7d7e80">
        <van-tabbar-item icon="pending-payment">待付款</van-tabbar-item>
        <van-tabbar-item icon="notes-o">待发货</van-tabbar-item>
        <van-tabbar-item icon="logistics">待收货</van-tabbar-item>
        <van-tabbar-item icon="chat-o">待评价</van-tabbar-item>
      </van-tabbar>
    </div>
    <van-row class="uOrders">
      <van-col span="23" class="uOrder">
        我的服务
        <van-icon name="service-o" class="uoRight"/>
      </van-col>
    </van-row>
    <div class="uTabbar" style="margin-bottom:0">
      <van-tabbar fixed class="uVan" active-color="#7d7e80">
        <van-tabbar-item icon="todo-list-o">我的预售</van-tabbar-item>
        <van-tabbar-item icon="point-gift-o">我的礼品单</van-tabbar-item>
        <van-tabbar-item icon="credit-pay">售后服务</van-tabbar-item>
        <van-tabbar-item icon="points">我的积分</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="uTabbar" style="margin-bottom:0">
      <van-tabbar fixed class="uVan" active-color="#7d7e80">
        <van-tabbar-item icon="cash-on-deliver">发票管理</van-tabbar-item>
        <van-tabbar-item icon="cash-back-record">优惠券</van-tabbar-item>
        <van-tabbar-item icon="balance-o">余额</van-tabbar-item>
        <van-tabbar-item icon="browsing-history-o">看过</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="uTabbar" style="margin-bottom:0">
      <van-tabbar fixed class="uVan" active-color="#7d7e80">
        <van-tabbar-item icon="chat-o">我的评论</van-tabbar-item>
        <van-tabbar-item icon="cluster-o">推荐</van-tabbar-item>
        <van-tabbar-item icon="friends-o">手表管家</van-tabbar-item>
        <van-tabbar-item icon="todo-list-o">维修订单</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return({
      fixed:false,
      userName:sessionStorage.getItem('userName')
    })
  },
  methods:{
    uLogin(){
      this.$router.push({
        name:'Login'
      })
    },
    uReg(){
      this.$router.push({
        name:'Reg'
      })
    }
  }
}
</script>

<style scoped>
  #app{
    margin-bottom: 3.625rem
  }
  .u-top{
    background: url(//static.wbiao.co/p/m/images/1/member-bg.png) no-repeat;width: 100%;height: 12.875rem;background-size: 100% 100%;
    text-align: right;color:#fff;font-size: 1.5rem;line-height: 3rem;
  }
  .setting{
    width: 100%;height: 2.75rem;
  }
  .header{
    text-align: left;
  }
  .header img{
    width: 4rem;height: 4rem;margin-left: 1.5rem;margin-right: 0.9rem
  }
  #uLoginReg{
    font-size: 1rem;color: #fff;line-height: 1rem;
  }
  .uSale{
    font-size: 0.75rem;color: #fff;line-height: 0.75rem;
  }
  .uCenter{
    font-size: 0.75rem;text-align: center;margin-top: 2rem;height: 3.25rem;background-color: rgba(0, 0, 0, 0.3);
  }
  .uDetail{
    width: 100%;height: 3.5rem;margin-left: 1rem;
  }
  .uDetail{
    background-color: #cc3d3d;height: 1.75rem;width: 21.4rem;margin-bottom: 0.625rem;margin-top: 1.125rem;font-size: 0.75rem;color: #fff;text-align: center;line-height: 1.75rem;
  }
  .uOrders{
    background: #fff
  }
  .uOrder{
    text-align: left;margin-left: 0.75rem;padding-right: 0.75rem;line-height: 2.69rem;height: 2.69rem;border-bottom: 1px solid #f1f1f1;font-size: 0.875rem
  }
  .uoRight{
    position: absolute;right:0;margin-top: 0.75rem;font-size: 1.2rem;color: #333;margin-right: 0.5rem
  }
  .uTabbar{
    height: 5rem;position: relative;margin-bottom: 0.5rem
  }
  .uVan{
    height: 5rem;position: absolute;right:0;top: 0
  }
</style>