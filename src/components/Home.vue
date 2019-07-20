<template>
  <div id="app">
    <van-row type="flex"  justify="center" class="top">
      <van-col span="5">
        <img class="logo-img" src="../data/logo.jpg"/>
      </van-col>
      <van-col span="24"><van-search class="top-search" placeholder="建行信用卡专享全场6期/12期免息" shape="round" @click="Search"/></van-col>
      <van-col span="3"><van-icon name="service-o" class="col-right"/></van-col>
    </van-row>
      <div class="section">
          <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-center">
        <van-swipe-item v-for="(img, index) in images" :key="index">
          <img  class="swipe-img" :src="img"/>
        </van-swipe-item>
      </van-swipe>

      <van-row type="flex" justify="space-around" class="van-span">
        <van-col span="6">
          <div @click="Choose">
            <img src="//image7.wbiao.co/mall/0f04becd6d5445d8a212429d549b9d3e.png?x-oss-process=image/resize,m_pad,w_88,h_88">
            <div class="txt">男表</div>
          </div>
        </van-col>
        <van-col span="6">
          <div @click="Choose">
            <img src="//image7.wbiao.co/mall/bb6773b9fdc9416eb3b7154dc8b5e302.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
            <div class="txt">女表</div>
          </div>
        </van-col>
        <van-col span="6">
          <div @click="Choose">
            <img src="//image7.wbiao.co/mall/1262ddbba2bf42fb8c6d94a899648d68.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
            <div class="txt">限时购</div>
          </div>
        </van-col>
        <van-col span="6">
          <div @click="Choose">
            <img src="//image7.wbiao.co/mall/70924f30f90942f3b36c678223d1ee72.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
            <div class="txt">二手</div>
          </div>
        </van-col>
      </van-row>
      <!-- 图片 -->
      <van-row class="van-nav">
        <img src="//image7.wbiao.co/mall/3f1c9ee2131c4c7ab63ab7d7b4b105e5.jpg" alt="">
      </van-row>

      <van-row class="pinpai">
        <p>品牌</p>
        <p class="pinpai-b"></p>
      </van-row>
      <!-- 轮播图一张 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-images1">
        <van-swipe-item><img src="//image7.wbiao.co/mall/71815f67408e4e628228505eb0206a08.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/71815f67408e4e628228505eb0206a08.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/71815f67408e4e628228505eb0206a08.jpg" alt=""></van-swipe-item>
      </van-swipe>

      <!-- 品牌图片 -->
      <van-row class="clock-logo">
        <van-col span="8"><img src="//image7.wbiao.co/mall/1efcc26a9e554a3eb8610e8297f72aa3.jpg" alt=""></van-col>
        <van-col span="8"><img src="//image7.wbiao.co/mall/18f3c34b86ca456d85937313f122aa89.jpg" alt=""></van-col>
        <van-col span="8"><img src="//image7.wbiao.co/mall/60c7a298bc2645d9abdb8ce0ab16846f.jpg" alt=""></van-col>
      </van-row>
      <van-row class="clock-logo">
        <van-col span="8"><img src="//image7.wbiao.co/mall/9eaed93cc0ae4cc1988aaa6cc1842edb.jpg" alt=""></van-col>
        <van-col span="8"><img src="//image7.wbiao.co/mall/ca8ad57a62bf47d5a9fdfe1d215a07b2.jpg" alt=""></van-col>
        <van-col span="8"><img src="//image7.wbiao.co/mall/d5bfdb90713f46e7a27e5d340be561ad.jpg" alt=""></van-col>
      </van-row>
      <van-row class="clock-logo">
        <van-col span="8"><img src="//image7.wbiao.co/mall/9206b68a12f94591a83d5914a4bfe5a1.jpg" alt=""></van-col>
        <van-col span="8"><img src="//image7.wbiao.co/mall/7a2e44b170c04eb5b71d4461f5e4699c.jpg" alt=""></van-col>
        <van-col span="8"><img src="//image7.wbiao.co/mall/ce1bac55cbed454c921bbb6f9267d9f2.jpg" alt=""></van-col>
      </van-row>
      <!-- 本月爆款 -->
      <van-row class="pinpai">
        <p>本月爆款</p>
        <p class="pinpai-b"></p>
      </van-row>
      <van-row class="">
        <van-col span="24" class="hot-img"><img src="//image7.wbiao.co/mall/c969d728154445128c91de7dec9c288b.jpg" alt=""></van-col>
        <van-col span="24" class="hot-img"><img src="//image7.wbiao.co/mall/1968e303112d4a1eab788d9913f458c5.jpg" alt=""></van-col>
        <van-col span="24" class="hot-img"><img src="//image7.wbiao.co/mall/b2c1983e0dab40d0bddafc9254f87795.jpg" alt=""></van-col>
        <van-col span="24" class="hot-img"><img src="//image7.wbiao.co/mall/9dc7c89926c3456c882af66c43236195.jpg" alt=""></van-col>
      </van-row>
      <!-- 闪购 -->
      <van-row class="pinpai">
        <p class="shangou">闪购</p>
        <p class="pinpai-b"></p>
      </van-row>
      <!-- 轮播图一张 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-images1">
        <van-swipe-item><img src="//image7.wbiao.co/mall/eb5980da219342379358703dfe43c640.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/eb5980da219342379358703dfe43c640.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/eb5980da219342379358703dfe43c640.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 闪购滑动 -->
      <div class="van-h">
        <div class="slide" ref='slide' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="{transform: translateX}">
          <slot>
            <img src="//image7.wbiao.co/mall/b2027b8c925a4bd7b355095cb4b3f372.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/2162c6a5b60d4521985fd8631d92c8f0.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/77d19f1506eb4913b8c0a4c5530e6367.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/99669c96197b42ad9344b71df1a3b3e2.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/c6433c32716f496387d1fff772dd2044.jpg" alt="">
          </slot>
        </div>
      </div>
      <!-- 男士 -->
      <van-row class="pinpai">
        <p class="shangou">男士</p>
        <p class="pinpai-b"></p>
      </van-row>
      <!-- 轮播图一张 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-images1">
        <van-swipe-item><img src="//image7.wbiao.co/mall/0ecd1265436640fd9b04c7f568b010d7.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/0ecd1265436640fd9b04c7f568b010d7.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/0ecd1265436640fd9b04c7f568b010d7.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 闪购滑动 -->
      <div class="van-h">
        <div class="slide" ref='slide' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="{transform: translateX}">
          <slot>
            <img src="//image7.wbiao.co/mall/bf6dae1032c8464b974fd431f34da434.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/d260eaf1bf0245b99910fdca2313db4c.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/cab993dacca343c3871a512540cfdf75.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/d2bf309c281d457c8e5d02928db19e07.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/b48d512e0c7e494a81413a23796a4c99.jpg" alt="">
          </slot>
        </div>
      </div>
      <!-- 女士 -->
      <van-row class="pinpai">
        <p class="shangou">女士</p>
        <p class="pinpai-b"></p>
      </van-row>
       <!-- 轮播图一张 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-images1">
        <van-swipe-item><img src="//image7.wbiao.co/mall/f2f681158b514cf1a16bc2b6c356d011.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/f2f681158b514cf1a16bc2b6c356d011.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/f2f681158b514cf1a16bc2b6c356d011.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 闪购滑动 -->
      <div class="van-h">
        <div class="slide" ref='slide' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="{transform: translateX}">
          <slot>
            <img src="//image7.wbiao.co/mall/e14339ee75694e518691a4aea644a662.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/056eaf937c304a7ca42e59e48f49e2da.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/1a05a4cf22a84846a622ad08819cb2cb.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/4eb37b7c274b4264bf2eeaaee63012d4.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/c82116e24203432ab8b280076ccc642d.jpg" alt="">
          </slot>
        </div>
      </div>
      <!-- 潮人-->
      <van-row class="pinpai">
        <p class="shangou">潮人</p>
        <p class="pinpai-b"></p>
      </van-row>
       <!-- 轮播图一张 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-images1">
        <van-swipe-item><img src="//image7.wbiao.co/mall/716e00a92eae4fed87af43d1d07cd0c4.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/716e00a92eae4fed87af43d1d07cd0c4.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="//image7.wbiao.co/mall/716e00a92eae4fed87af43d1d07cd0c4.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 闪购滑动 -->
      <!-- <div class="van-h">
        <div class="van-col-images1">
          <img src="//image7.wbiao.co/mall/888feb3bfc4f45ec8e3385a5c52135e5.jpg" alt="">
          <img src="//image7.wbiao.co/mall/2d95bfc54d494191a4843ae2c96566e8.jpg" alt="">
          <img src="//image7.wbiao.co/mall/5adeb734cf7e4081b07c786b4c0372f9.jpg" alt="">
          <img src="//image7.wbiao.co/mall/037d86d3f98b4407b7a0e63acfb853fe.jpg" alt="">
          <img src="//image7.wbiao.co/mall/409b567f1dd04aa49b9d0c6557c85163.jpg" alt="">
        </div>
      </div> -->
      <div class="van-h">
        <div class="slide" ref='slide' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="{transform: translateX}">
          <slot>
            <img src="//image7.wbiao.co/mall/888feb3bfc4f45ec8e3385a5c52135e5.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/2d95bfc54d494191a4843ae2c96566e8.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/5adeb734cf7e4081b07c786b4c0372f9.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/037d86d3f98b4407b7a0e63acfb853fe.jpg" alt="">
          </slot>
          <slot>
            <img src="//image7.wbiao.co/mall/409b567f1dd04aa49b9d0c6557c85163.jpg" alt="">
          </slot>
        </div>
      </div>
      <!-- 尊享服务 -->
      <van-row class="pinpai">
        <p>尊享服务</p>
        <p class="pinpai-b"></p>
      </van-row>
      <van-row class="footer-img">
        <van-col span="24" class="hot-img1"><img src="//image7.wbiao.co/mall/c675b18c54224e91a9c6252aef12c405.jpg" alt=""></van-col>
        <van-col span="24" class="hot-img1"><img src="//image7.wbiao.co/mall/0d8abcfdb42449a89384a7dcd2861d6b.jpg" alt=""></van-col>
        <van-col span="24" class="hot-img1"><img src="//image7.wbiao.co/mall/02be0783728d459db61616c1ca4bb96c.jpg" alt=""></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { images } from '../data'

export default {
  name: 'slide',
  data(){
    return {
      images,

      startX: 0, //开始触摸的位置
      lastX: 0, //滑动时的位置
      endX: 0, //结束触摸的位置
      disX: 0, //移动距离
      lastX: 0, //上一次X坐标
      lastY: 0, //上一次Y坐标
      translateX: 'translateX(0px)'
    }
  },
  methods:{
    Search(){
      //alert("弹")
      this.$router.push({
        name:'Search'
      })
    },
    Choose(){
      this.$router.push({
        name:'ChooseNav'
      })
    },
    touchStart: function (ev) {
        ev = ev || event;
        // console.log(ev.targetTouches);
        // console.log(ev.changedTouches);
        if (ev.touches.length == 1) { //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = this.lastX = ev.touches[0].clientX; // 记录开始位置
          this.lastY = ev.touches[0].clientX;
        }
      },
      touchMove: function (ev) {
        ev = ev || event;
        let slideWidth = this.$refs.slide.offsetWidth; //$refs 减少获取dom节点的消耗
        // console.log(ev.targetTouches);
        // console.log(ev.changedTouches);
        if (ev.touches.length == 1) {
          // 实时的滑动的距离-起始位置=实时移动的位置
          this.disX = this.lastX - this.startX;
          // 计算两次移动距离Y>X就不启动滑动动画,防止误滑
          var disX = ev.touches[0].clientX - this.lastX
          var disY = ev.touches[0].clientY - this.lastY
          // console.log(disX, disY);
          if (Math.abs(disX) > Math.abs(disY)) {
            this.translateX = 'translateX(' + this.disX + 'px)';
          }
          // 记录一次坐标值
          this.lastX = ev.touches[0].clientX;
          this.lastY = ev.touches[0].clientY;
        }
      },
      touchEnd: function (ev) {
        ev = ev || event;
        let slideWidth = this.$refs.slide.offsetWidth;
        if (ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;
          this.disX = endX - this.startX;
          // console.log(this.disX, 'this.disX')
          // console.log((slideWidth / 2), 'slideWidth/2');
          this.translateX = 'translateX(0px)';
          // 只有滑动大于一半距离才触发
          if (Math.abs(this.disX) > (slideWidth / 2)) {
            if (this.disX < 0) {
              console.log('左滑');
              this.$emit('change', 'left')
            } else {
              console.log('右滑');
              this.$emit('change', 'right')
            }
          }
        }
      }
  }
}
</script>

<style scoped>
  .top{
    height: 3.5rem;background:#fff
  }
  .logo-img{
    height: 2.5rem;width: 4.3rem;margin-top: 0.65rem;margin-left: 0.7rem
  }
  .col-right{
    font-size:1.5rem;text-align: right;line-height: 3rem;
  }
  .swipe-center{
    height: 15.625rem;
  }
  .swipe-img{
    width: 100%;height: 100%;
  }
  .top-search{
    font-size: 0.5rem
  }
  .section{
    margin-bottom: 3.125rem
  }
  .van-span{
    height: 4.68rem;padding: 0.75rem 0;text-align: center;font-size: 0.75rem;background-image: linear-gradient(90deg,#fff 0,#f5f5f5 100%);
  }
  .van-span img{
    width: 2.75rem;height: 2.75rem;
  }
  .van-span .txt {
    margin-top: 0.31rem
  }
  .van-nav{
    width: 100%;height: 8.5rem;
  }
  .van-nav img{
    width: 100%;height: 100%;
  }
  .pinpai{
    text-align: center;font-size: 1rem;line-height: 1rem;margin-top: 1rem;margin-bottom: 0.875rem;font-weight: bold
  }
  .pinpai-b{
    width: 24px;
    height: 2px;
    background: #ccaa7a;
    margin: 0 auto;
  }
  .swipe-images1{
    width: 100%;height: 15.625rem;
  }
  .swipe-images1 img{
    width: 100%;height: 100%;
  }
  .clock-logo img{
    width: 100%;height: 5rem;
  }
  .hot-img{
    width: 100%;height: 11.25rem;
  }
  .hot-img img{
    width: 100%;height: 100%;
  }
  .shangou{
    margin-top: 1.75rem
  }
  .van-h{
    height: 13rem;width: 100%;overflow: hidden;
  }
  .van-col-images1{
    height: 13rem;width: 48rem
  }
  .van-col-images1 img{
   width: 9.6rem;height: 13rem;
 }
 .hot-img1{
   width: 100%;height: 7.6rem
 }
 .hot-img1 img{
   width: 100%;height: 100%;
 }

  .slide{
    height: 13rem;width: 48rem
  }
  .slide img{
   width: 9.6rem;height: 13rem;
  }
</style>

