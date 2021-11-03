<template>
    <div :class="{shop:true,showborder:showBorder?true:false}">
        <img class="shop-logo" :src="item.imgURL" alt="">
        <div class="shop-info">
            <div class="shop-title">{{item.name}}</div>
            <div class="shop-tags">
                <span class="shop-tag">月售:{{item.sales}}</span>
                <span class="shop-tag">起送:{{item.expressLimit}}</span>
                <span class="shop-tag">基础运费:{{item.expressPrice}}</span>
            </div>
            <div class="shop-desc">{{item.slogan}}</div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.shop {
    display: flex;
    column-gap: 5%;
    margin: 0 auto;
    width: 96%;
    padding: .1rem;
    box-sizing: border-box;
    line-height: .32rem;
    
}
.showborder{
border-bottom: 1px solid #f1f1f1;
}
.shop-info{
  flex:2;
  .shop-title{
      font-size: .16rem;
      font-weight: 600;
  }
}
.shop-logo {
    display: block;
    width: 1rem;
    height: 1rem;
          border-radius: .1rem;
}

.shop-tag {
    margin-right: .05rem;
    font-size: .05rem;
    color: red;
    border-radius: 0.1rem;
    padding: 0 .05rem;
    background-color: #f1f1f1;
}
</style>
<script>

export default {
    props:['item','showBorder']
}
</script>
