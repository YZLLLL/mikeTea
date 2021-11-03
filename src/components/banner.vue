<template>
  <!-- 首页的轮播图 -->
  <div class="home-banner-box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList"
        :key="item.id">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
:class="{a:true}"
<script>
export default {
  data () {
    return {
      bannerList: []
    }
  },
  methods: {

  },
  created () {
    this.bannerList = [
      { id: 1, img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.16pic.com%2F00%2F88%2F44%2F16pic_8844212_s.jpg&refer=http%3A%2F%2Fimg.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636810062&t=121e59f657d81b554d19f18bc7665771' },
      { id: 2, img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.16pic.com%2F00%2F88%2F44%2F16pic_8844212_s.jpg&refer=http%3A%2F%2Fimg.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636810062&t=121e59f657d81b554d19f18bc7665771' },
      { id: 3, img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.16pic.com%2F00%2F88%2F44%2F16pic_8844212_s.jpg&refer=http%3A%2F%2Fimg.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636810062&t=121e59f657d81b554d19f18bc7665771' }
    ]
  }
}
</script>
<style>
</style>

