// 设置localStorage,实现数据持久化
// 在改变购物车商品数量，是否选择是调用


const setLocalStorage = (state) => {
    const { cartList } = state
    localStorage.cartList = JSON.stringify(cartList)
};

const getLocalStorage = () => {
    // 如果不存在，则为"{}"
    if (localStorage.cartList == undefined) { localStorage.cartList = "{}" }
    return JSON.parse(localStorage.cartList) || {}
}


const setOrderLocalStorage = (state) => {
    const { orderList } = state
    localStorage.orderList = JSON.stringify(orderList)
};

const getOrderLocalStorage = () => {
    // 如果不存在，则为"[]"
    if (localStorage.orderList == undefined) { localStorage.orderList = "[]" }
    return JSON.parse(localStorage.orderList) || {}
}
export { setLocalStorage, getLocalStorage, setOrderLocalStorage, getOrderLocalStorage }