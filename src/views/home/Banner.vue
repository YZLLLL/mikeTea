<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in imgList" :key='index'>
      <img :src="item" alt="">
  </van-swipe-item>
</van-swipe>
    
</template>
<style scoped lang='scss'>

 .my-swipe{
     width: 96%;
     margin: .1rem auto;
     border-radius: .05rem;
     overflow: hidden;
    .van-swipe-item {
        img{
            display: block;
            width: 100%;
        }
  }
 } 
</style>
<script>
import { Swipe, SwipeItem } from 'vant';
const imgList=[
    'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
    'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
    'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
    'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
]
export default{
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup(){
      return {imgList}
  }
}

</script>
