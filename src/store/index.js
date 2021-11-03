import Vuex from 'vuex'
import { setLocalStorage, getLocalStorage, setOrderLocalStorage, getOrderLocalStorage } from '../untils/myLocalStorage'

export default Vuex.createStore({
    state: {
        cartList: getLocalStorage(),
        orderList: getOrderLocalStorage()
    },
    mutations: {
        // 第一个参数是上面的store
        // 第二个参数是commit传入的对象
        changeCount(state, payload) {
            const { shopId, productId, productInfo } = payload
            // 相应店铺
            let shopInfo = state.cartList[shopId]
            if (!shopInfo) { shopInfo = {} }
            // 相应商品
            let product = shopInfo[productId]
            if (!product) {
                product = productInfo
                product.count = 0
            }
            product.count = product.count + payload.num
            product.checked = true
                // if (payload.num > 0) { product.check = true }
            if (product.count <= 0) {
                product.count = 0;
                product.checked = false
            }
            shopInfo[productId] = product
            state.cartList[shopId] = shopInfo
            setLocalStorage(state)
        },
        getOrder(state, payload) {
            // 点击结算后，拿到相应店铺的cartList，返回出去
            const { shopId } = payload;
            // 计算总价,总数
            let price = 0;
            let num = 0;
            for (let v in state.cartList[shopId]) {
                const product = state.cartList[shopId][v];
                if (product.count > 0) {
                    num += product.count;
                    price += product.count * product.price;
                }
            }
            const orderItem = {};
            // 深克隆
            orderItem.data = JSON.parse(JSON.stringify(state.cartList[shopId]));
            // 结算后清空购物车
            state.cartList[shopId] = {};
            orderItem.totalPrice = price.toFixed(2);
            orderItem.totalNum = num;
            state.orderList.unshift(orderItem);
            // 存储到localStorage
            setOrderLocalStorage(state)

        }
    },
    actions: {},
    modules: {}
})