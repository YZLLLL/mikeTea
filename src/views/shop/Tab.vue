<template>
    <div class="tab">
        <div class="tab-meau">
            <div :class="{'tab-meau-item':true,active:currentTab==item.tab}" 
            v-for="item in categories" :key="item.name" @click="() => getCurrentTab(item.tab)"
            >
            {{item.name}}
            </div>
        </div>
        <div class="tab-info">
            <div class="tab-info-item" v-for="item in list" :key="item._id">
                <img class="tab-info-item-img" :src="item.imgUrl" alt="">
                <div class="tab-info-item-product">
                    <div class="name">{{item.name}}</div>
                    <div class="sales">月售：{{item.sales}}</div>
                    <div class="price">价格：{{item.price}}<span class="oldPrice">{{item.oldPrice}}</span></div>
                    <div class="handleNum">
                        <span class="iconfont cutNum" @click="()=>{changeCount(shopId,item._id,item,-1)}">&#xe8b1;</span>
                        <!-- 这里不用?.就会报错 -->
                        <span class="num">{{cartList?.[shopId]?.[item._id]?.count || 0}}</span>
                        <span class="iconfont plusNum" @click="()=>{changeCount(shopId,item._id,item,1)}">&#xe726;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.tab{
    display: flex;
    margin: 0 auto;
    &-meau{
        width: 20%;
        text-align: center;
        background:#f1f1f1;
        &-item{
            height: .4rem;
            line-height: .4rem;
        }
    }
    &-info{
        flex: 1;
        &-item{
            display: flex;
            padding: .1rem;
            border-bottom: 1px solid #f1f1f1;
            column-gap: 5%;
            &-img{
            height:.8rem;
            width: .8rem;
            }
            &-product{
                flex:1;
                position: relative;
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
                    .plusNum{
                        color: #ffbb00;
                    }
                }
            }
        }
        
    }
}
.name{
    font-size: .18rem;
}
.sales{
    margin-top: .1rem;
}
.price{
    margin-top: .1rem;
    color: red;
    .oldPrice{
        margin-left: .1rem;
        color: gray;
        text-decoration: line-through;
    }
}

.active{
    background-color: #fff;
}

</style>
<script>
import {get} from '../../untils/myAxios'
import {useRoute} from 'vue-router'
import {reactive,ref,toRefs,watchEffect} from 'vue'
// 加入购物车
import {changCountInfo} from './changCount'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name:'秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit'}
];
// 切换tab
const getCurrent=()=>{
    const currentTab = ref(categories[0].tab)
    const getCurrentTab=(tab)=>{
        currentTab.value = tab;
    };
    return {currentTab,getCurrentTab}
}

// 获取相应商家的商品信息
const getGoodsInfo=(currentTab,shopId)=>{
    const data = reactive({list:[]});
    const goodsInfo=async ()=>{
        // 根据传入tab,后端返回不同的数据，从而实现tab切换功能
        const result = await get(`/api/shop/${shopId}/product`,{tab:currentTab.value});
        if(result.errno==0&&result.data){
            data.list=result.data;
        }    
    };
    // 依赖项改变，自动执行，也可以绑定到tab的click事件
    watchEffect(()=>{ goodsInfo() })
    const {list} = toRefs(data);
    return {list,shopId}
}




export default {
setup(){
    const route = useRoute();
    const shopId=route.params.id;
    const {currentTab,getCurrentTab}= getCurrent();
    const {list}=getGoodsInfo(currentTab,shopId);
    const {changeCount,cartList}= changCountInfo();
    return {categories,list,currentTab,getCurrentTab,shopId,changeCount,cartList}
}
}
</script>
