<template>
<div class="top">
    <span @click="back" class="iconfont">&#xe6ff;</span>
    <input class="search" type="text" placeholder="满100减100">
</div>
   <shopInfo  :item="shop"/> 
   <tab/>
   <shopCart/>
</template>
<style scoped lang='scss'>
.top{
    display: flex;
    column-gap: 5%;
    .iconfont{
    line-height: .32rem;
    margin:0 .1rem;
}
.search{
flex: 1;
margin-top: .08rem;
padding-left: .2rem;
border-radius: .5rem;
height: .16rem;
margin-right: 5%;
}
}


</style>
<script>
import shopInfo from "../../components/shopInfo"
import tab from "./Tab"
import shopCart from './shopCart'
import {useRoute,useRouter} from 'vue-router'
import {get} from '../../untils/myAxios'
import {reactive,toRefs} from 'vue'
// 根据params的id,获取店家信息
const getShopInfo = ()=>{
    const route=useRoute();
    const data=reactive({shop:{}})
    const getInfo=async ()=>{
        const result = await get(`/api/shop/${route.params.id}`);
        data.shop=result;
    }
    const {shop}=toRefs(data);
    return {getInfo,shop}
}
// 返回
const getBack=()=>{
    const router =useRouter();
    const back=()=>{
        router.back()
    };
    return {back}
}
export default {
    components:{shopInfo,tab,shopCart},
    setup(){
        // 获取店家信息
        const {shop,getInfo}=getShopInfo();
        getInfo();
        // 页面回退
        const {back} = getBack();
        //获取商品列表
        // const {list,goodsInfo}=getGoodsInfo();
        return {shop,back}
    }
    
}
</script>
