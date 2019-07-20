import axios from '../untils/request';
import { serverUrl } from '../untils/config'

/**
 * 获取商品列表
 * @param {*} params
 *  per   每一页显示的数量
 *  page  当前显示的页数
 */
export const getProducts = (params) => {
  return axios.get(serverUrl+'/api/v1/products', { params });
}

/**
 * 获取商品详情
 * @param {*} id 商品id
 */
export const getProductDetail = (id) => {
  return axios.get(serverUrl+`/api/v1/products/${id}`);
}

/* export function addToShopCart(product, quantity) {
  let myCarts = getShopCart();//获取购物车信息
  //查询商品在购物车数组中的索引
  const index = myCarts.findIndex(cart => cart.product == product)
  //判断购物车中是否存在指定商品
  if(index > -1) {
    //存在，使商品总数增加
    myCarts[index].quantity = myCarts[index].quantity + quantity;
  } else {
    //不存在
    myCarts.push({
      product,
      quantity,
    });
  }
  localStorage.setItem('my-shopcart', JSON.stringify(myCarts));
}
 */
export function addToShopCart(product,quantity) {
  return axios.post('/api/v1/shop_carts', {
    product,
    quantity
  }, {
    headers: {
      authorization: 'bearer ' + sessionStorage.getItem('token')
    }
  })
}
//通过localstorage获取商品信息，存在获取，不存在返回空数组
/* export function getShopCart() {
  if (localStorage.getItem('my-shopcart')) {
    return JSON.parse(localStorage.getItem('my-shopcart'))
  } else {
    return []
  }
} */

export function getShopCart(){
  return axios.get('/api/v1/shop_carts', {
    headers: {
      authorization: 'bearer ' + sessionStorage.getItem('token')
    }
  })
}
//加购同时使角标变化
export function getCartCount() {
  let myCarts = getShopCart();
  let result = 0;
  myCarts.forEach(item => result += item.quantity)
  return result;
}