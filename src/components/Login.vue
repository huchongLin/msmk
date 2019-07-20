<template>
  <div id="app">
      <h3 class="title">
        <van-icon name="arrow-left" @click="onClickLeft" class="arrow-left"/>
        登录
      </h3>
    <van-cell-group>
      <van-field v-model="userName" placeholder="请输入用户名" />
      <van-field type="password" v-model="password" placeholder="请输入密码" />
    </van-cell-group>
    <div class="goReg"><router-link :to="{ name: 'Reg' }"> 去注册 </router-link></div>
    <van-button type="info" @click="loginHandle" class="regs">登录</van-button>
  </div>
</template>
<script>
import { post } from "axios"
import { Toast } from "vant"
import { loginIn } from '../utils/auth'
import { loginUrl } from '../utils/config.js'
export default {
  data(){
    return{
      userName:'',
      password:'',
      loginUrl,
    }
  },
  methods:{
    loginHandle(){
      post(loginUrl+'/api/v1/auth/login', {
        userName :this.userName,
        password :this.password,
      })
      .then(res =>{
        if(res.data.code=='success'){
          loginIn(res.data.token,this.userName)
          this.$router.push({
            name:'UserCenter'
          })
        }else{
           Toast('登录失败！')
        }
      })
    },
    onClickLeft(){
      this.$router.push({
        name: 'Home'
      })
    }
  },
}

</script>
<style scoped>

.title{
  font-size:1.5rem;
  font-weight: normal;
  text-align: center
}
.arrow-left{
  float: left;
}
.goReg{
  font-size: 0.8rem;
  text-align: right;
  padding-right: 0.6rem;
  color: blue
}
.regs{
  width: 100%;
  margin-top:1rem;
}
</style>