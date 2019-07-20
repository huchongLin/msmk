//登录
export function loginIn(token,userName) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('userName', userName)
}


//通过储存看是否登录
export function isLoginIn() {
  if(sessionStorage.getItem('token')){
    return true
  }else{
    return false
  }
}

//清除本地存储
export function logOut(){
  sessionStorage.removeItem('token')
}