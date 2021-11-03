<template>
<div class="mask" v-show="show" @click="showCart"></div>
<div class="shopCartInfo" v-show="show">
    <span class="iconfont check">全选:
        <span class="allchecked" @click="allchecked(isAllChecked)" v-html="isAllChecked ? '&#xe605;':'&#xe602;'"></span>
        </span>
    <div class="clearDiv"><span class="clear" @click="clearCart()">清空购物车</span></div>
    <div class="tab-info" >
        <template v-for="item in productList" :key="item._id">
        <div class="tab-info-item" v-if="item.count>0">
                <div class="isCheck">
                    <span class="iconfont checked" 
                    v-html="item.checked ? '&#xe605;':'&#xe602;'"
                    @click="checkClick(shopId,item._id)"
                    ></span>
                    </div>  
                <img class="tab-info-item-img" :src="item.imgUrl" alt="">
                <div class="tab-info-item-product">
                    <span class="name">{{item.name}}</span>
                    <span class="price">￥：{{(item.price*item.count).toFixed(2)}}</span>
                    <div class="handleNum">
                        <span class="iconfont cutNum" @click="()=>{changeCount(shopId,item._id,item,-1)}">&#xe8b1;</span>
                        <span class="num">{{item.count}}</span>
                        <span class="iconfont plusNum" @click="()=>{changeCount(shopId,item._id,item,1)}">&#xe726;</span>
                    </div>
                </div>
        </div>
        </template>
    </div>
</div>
<div class="shopCart">
    <div :class="{'cart':true,'cart-0':cartColor}">
        <div class="img">
            <img @click="showCart" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F26%2F20180426101105_HuHSm.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636937905&t=3643d1e3ab8da0ae7052c886cf002a3d" alt="">
            <span class="totalNum">{{totalNum}}</span>
        </div>
        <div class="totalPrice">总金额：<span>￥{{totalPrice}}</span></div>
        <!-- 数量为0时不能提交 -->
        <button @click="!cartColor?getOrder(shopId):()=>{return}">结算</button>
    </div>
</div>
    
</template>
<style scoped lang='scss'>
.check{
    float: left;
    .allchecked{
        display: inline-block;
    }
}
.mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
}
.shopCart{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .4rem;
    background-color: rgb(255, 187, 0);
    border-top: 1px solid #f1f1f1;
    .cart{
        display: flex;
        .img{
            margin-left: .2rem;
            height: .4rem;
            position: relative;
            img{
                height: 100%;
            }
            .totalNum{
                position: absolute;
                right: 0;
                top: 0;
                color: red;
            }
        }
        .totalPrice{
            flex: 1;
            line-height: .4rem;
            font-size: .14rem;
            text-align: center;
            span{
                color: red;
            }
        }
        button{
            width: .8rem;
            border: none;
            background-color: skyblue;
        }
    }
    .cart-0{
        background-color: gray;
        button{
            opacity: .5;
        }
    }
}

.shopCartInfo{
    position: fixed;
    left: 0;
    bottom: .4rem;
    width: 100%;
    border-top: 2px solid #f1f1f1;
    box-shadow: 0 -50px 50px #666;
    background: #fff;
    .clearDiv{
        height: .2rem;
        .clear{
        float: right;
        line-height: .2rem;
    }
    }
    
    .tab-info{
        &-item{
                display: flex;
                padding: .1rem;
                border-bottom: 1px solid #f1f1f1;
                column-gap: 5%;
                &-img{
                height:.3rem;
                width: .3rem;
            }
            &-product{
                flex:1;
                position: relative;
                .name{
                    display: inline-block;
                    width: .8rem;
                    height: .2rem;
                    overflow: hidden;
                    margin-right: .5rem;
                    line-height: .3rem;
                }
                .price{
                    line-height: .3rem;
                }
                .handleNum{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    span{
                        margin-right: .05rem;
                    }
                    .num{
                        font-size: .168rem;
                        line-height: .168rem;
                        color:#111;
                    }
                }
            }
        }
    }
}
</style>
<script>
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
import {changCountInfo,getOrderList} from './changCount'
import {computed,ref, watchEffect} from 'vue'
import {setLocalStorage} from '../../untils/myLocalStorage'
// 获取购物车相关信息
const getCartInfo=()=>{
    const store = useStore();
    const cartList = store.state.cartList;
    const route = useRoute();
    const shopId = route.params.id;
    // 获取购物车列表
    const productList = computed(()=>{
        const productList = cartList[shopId] || {};
        return productList
    });
    // 获取总数量
    const totalNum = computed(()=>{
        let num=0;
        const productList = cartList[shopId]
        for(let v in productList){
            const product = productList[v];
            if(product.checked){
                num += product.count;
            }
        }
        return num
    });
    // 获取总价
    const totalPrice = computed(()=>{
        let price=0;
        const productList = cartList[shopId];
        for(let v in productList){
            const product = productList[v];
            if(product.checked){
                price += product.count*product.price; 
            }
        }
        return price.toFixed(2)
    });
    // 清空购物车
    const clearCart = ()=>{
        cartList[shopId] = {};
        setLocalStorage(store.state) 
    };
    // 是否全选
    const allchecked=(isAllChecked)=>{
        const productList = cartList[shopId];
        if(isAllChecked){
            for(let v in productList){
            productList[v].checked = true
            }
            isAllChecked=false
        }else{
           for(let v in productList){
            productList[v].checked = false 
            isAllChecked=true
            }
        }
        for(let v in productList){
            productList[v].checked = !productList[v].checked
        }
        setLocalStorage(store.state)
    }
    // 遍历catelist,一个是false则为不全选
    const isAllChecked = computed(()=>{
        let allchecked = true
        const productList = cartList[shopId];
        for(let v in productList){
            if(!productList[v].checked){
                allchecked=false
            }
        }
        setLocalStorage(store.state)
        return allchecked
    });
    // 单个是否选择
    const checkClick=(shopId,productId)=>{
        cartList[shopId][productId].checked = !cartList[shopId][productId].checked
        setLocalStorage(store.state)
    }


    return {shopId,totalNum,totalPrice,allchecked,checkClick,isAllChecked,
    productList,clearCart}
}
export default {
    setup(){
        let show = ref(false);
        
        const showCart = ()=>{
            show.value = ! show.value
        };
        const {changeCount}= changCountInfo();
        const {shopId,productList,totalNum,totalPrice,clearCart,allchecked,checkClick,isAllChecked} = getCartInfo();
        // 当购物车为空时，购物车显示为灰色
        // 通过加类名控制
        let cartColor = ref(false);
        watchEffect(()=>{
            if(totalNum.value<=0){
                cartColor.value = true
            }else{
                cartColor.value = false
            }
        });
        // 提交订单
        const {getOrder}=getOrderList();
        return {shopId,productList,totalNum,totalPrice,clearCart,allchecked,checkClick,isAllChecked,
        showCart,show,cartColor,getOrder,
        changeCount}
    }
}
</script>
