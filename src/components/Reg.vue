<template>
  <div id="app">
    <h3 class="title">注册每时每刻</h3>
    <van-cell-group>
      <!-- <van-field type="tel" v-model="phone" placeholder="请输入手机号" /> -->
      <van-field v-model="userName" placeholder="请输入用户名" />
      <van-field type="password" v-model="password" placeholder="请输入密码" />
      <van-field type="password" v-model="repassword" placeholder="请确认密码"/>
      <div class="logins">
        已有账号
        <router-link :to="{ name: 'Login' }"> 去登录 </router-link>
      </div>
      <van-button type="info" class="regs" @click="reg">注册</van-button>
    </van-cell-group>
    <p class="xieyi">点击注册意味着阁下同意<a href="https://mu.wbiao.cn/member/protocol">《每时每刻用户协议》</a></p>
  </div>
</template>
<script>
import { reg } from '../utils/user'
import { loginIn } from '../utils/auth'
import { Toast } from 'vant';
export default {
  data(){
    return{
      userName:'',
      password:'',
      repassword:'',
     // phone:''
    }
  },
  methods:{
    async reg(){
      if(!this.password || !this.userName){
        Toast('请重新输入用户名和密码')
        return 
      }
      if(this.password != this.repassword){
        Toast('两次密码不一致')
        return 
      }
      const result = await reg({
        userName:this.userName,
        password:this.password
      })
      if(result.data.code =='success'){
        loginIn(result.data.token)
        this.$router.push({
          name: 'UserCenter'
        })
      }else{
        Toast('注册失败')
      }
    }
  }
}
</script>

<style scoped>
.title{
  font-size:1.5rem;
  font-weight: normal;
  text-align: center
}
.logins{
  text-align: right;
  font-size: 0.8rem;
  padding-right:1rem
}
.regs{
  width: 100%;
  margin-top:1rem;
}
.xieyi{
  text-align: center;
  font-size: 0.8rem;
}
</style>