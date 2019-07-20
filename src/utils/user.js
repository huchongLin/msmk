import axios from './request';
//登录
export function login(userName,password){
  return axios.post('/api/v1/auth/login',{
    userName,
    password
  })
  
}
//注册
export function reg(user){
  return axios.post('/api/v1/auth/reg',user)
}
//获取购物车信息
export function getCartMsg(){
  if(localStorage.getItem('my-shopcart')){
    return JSON.parse(localStorage.getItem('my-shopcart'))
  }else{
    return[]
  }
}
//添加购物车
export function addToCart(product,num){
  let myCart = getCartMsg();
  const index = myCart.forEach((item)=>{
    return item.product == product
  })
  if(index>-1){
    myCart[index].num +=num
  }else{
    myCart.push({
      product,
      num
    })
  }
  localStorage.setItem('my-shopcart', JSON.stringify(myCart))
}

//从购物车删除商品
export function delToCart(product){
  let myCart = getCartMsg();
  const index = myCart.forEach((item)=>{
    return item.product == product
  })
  if(index>-1){
    myCart.splice(index,1)
  }
  localStorage.setItem('my-shopcart', JSON.stringify(myCart))
}

//获取商品数量

export function productNum(){
  let myCart = getCartMsg();
  let result =0;
  myCart.forEach(item => result += item.num)
  return result
}


export function addToshopCart(product,quantity) {
  return axios.post('/api/v1/shop_carts', {
    product,
    quantity
  }, {
    headers: {
      authorization: 'bearer ' + sessionStorage.getItem('token')
    }
  })
}
