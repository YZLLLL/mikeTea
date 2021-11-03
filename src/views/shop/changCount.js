// 因为需要两次使用增加减少数量，所以提取出来
import { useStore } from 'vuex'
export const changCountInfo = () => {
    // 使用vuex
    const store = useStore();
    const cartList = store.state.cartList;
    // 通过commit方法将数据存储在store当中进行存贮，读写
    const changeCount = (shopId, productId, productInfo, num) => {
        // 参数： vuex中的mutations中的方法  传入的参数
        store.commit('changeCount', { shopId, productId, productInfo, num })
    };
    return { changeCount, cartList }
}

// 将订单信息unshift到vuex的数组中
export const getOrderList = () => {
    // 使用vuex
    const store = useStore();
    const orderList = store.state.orderList;
    // 通过commit方法将数据存储在store当中进行存贮，读写
    const getOrder = (shopId) => {
        // 参数： vuex中的mutations中的方法  传入的参数
        store.commit('getOrder', { shopId })
    };
    return { orderList, getOrder }
}