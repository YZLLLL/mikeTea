<template>
<div class="order">
    <div class="order-item">
        <div class="title">订单</div>
        <div class="content">
            <div class="orderCate"><span style="color:gold">全部</span><span>待评价</span><span>退款</span></div>
            <div class="item" v-for="(items, index) in orderList" :key="index">
                <span class="shopName iconfont" >&#xe63d; 1点点&#xe604;</span>
                <template v-for="(item,index) in items.data" :key="index">
                    <div class="item-goods" v-if="item.count>0">
                        <img class="goodsImg" :src="item.imgUrl" alt="">
                        <span>{{item.name}}</span>
                        <span class="itemInfo">X{{item.count}}</span>
                    </div>
                </template>
                <div class="goodsInfo">
                    <span class="total">总计：</span>
                <span class="totalPrice">￥{{items.totalPrice}}</span>
                <span class="totalNum">共{{items.totalNum}}件</span>
                <span class="oneMore">再来一单</span> 
                </div>
            
            </div>
        </div>
    </div>
</div>
    
<bottom />
</template>
<script>
import bottom from '../../components/bottom.vue'
import {useStore} from 'vuex'

export default{
    components:{bottom},
    setup(){
        const store = useStore();
        // 拿到orderList
        const orderList = store.state.orderList
        return {orderList}
    }
}


</script>
<style scoped lang='scss'>
.order{
    &-item{
        background-color: #f1f1f1;
        .title{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: .16rem;
            line-height: .4rem;
            background-color: #fff;
        }
        .orderCate{
            height: .4rem;
            span{
                line-height: .4rem;
                margin: 0 .1rem 0 .05rem;
                padding: .05rem .1rem;
                background-color: #fff;
                border-radius: .08rem;
            }
        }
    }
}

.content{
    padding: .4rem 0 .42rem 0;
}

.item{
    overflow: hidden;
    width: 96%;
    height: 1.2rem;
    border-radius: .05rem;
    margin: 0 auto .1rem;   
    position: relative;
    background-color: #fff;
        .shopName{
            line-height: .2rem;
            font-size: .1rem;
        }
        .goodsInfo{
            position: absolute;
            width: 1rem;
            height: 1.2rem;
            top: 0;
            right: 0;
            background-color: rgba(200,200,200,.1);
            box-shadow: -0.05rem 0 .2rem #eee;
            .total{
                position: absolute;
                top: 10%;
                left: .1rem;
            }
            .totalPrice{
            position: absolute;
            top: 26%;
            left: .2rem;
            font-size: .16rem;
            }
            .totalNum{
            position: absolute;
            top: 50%;
            left: .2rem;  
            }
            .oneMore{
                position: absolute;
                top: 70%;
                right: .1rem;
                padding: .05rem;
                border-radius: .05rem;
                color: #fff;
                background-color: #ea9518;
            }
        }
        .shopName{
            position: absolute;
            top: 0;
            left: .1rem;
        }
    
    &-goods{
        margin: .3rem .1em .2rem .2rem;
        width: .5rem;
        height: .64rem;
        float: left;
        margin-left: .1rem;
        .goodsImg{
            width: 100%;
            height: .5rem;
        }
        .itemInfo{
            color: red;
            font-size: .08rem;
        }
    }
}


</style>
