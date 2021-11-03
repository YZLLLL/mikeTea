<template>
  <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in cateList" :key="index">
          <span class="iconfont" v-html='item.icon' :style="{color:item.color}"></span>
          <div>{{item.text}}</div>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.horizontal-container{
  .scroll-wrapper{
    position :relative;
    width :90%;
    margin :0 auto;
    white-space: nowrap;
    border-radius: 5px;
    overflow :hidden;
    .scroll-content{
      display :inline-block;
      .scroll-item{
        height: 20px;
        line-height :32px;
        font-size :14px;
        display :inline-block;
        text-align :center;
        padding: 0 .26rem;
      .iconfont{
        font-size: 32px;
      }
      }
    }
  }
}
</style>
<script>
import {get} from '../../untils/myAxios'
import BScroll from '@better-scroll/core'
export default{
  data(){
    return{
      cateList:[],
    }
  },
  methods:{
    async getCate(){
      const result = await get("/api/getCateList");
      this.cateList = result;
    },
    init() {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          probeType: 3 // listening scroll event
        })
      }
  },
  beforeMount(){
    (async ()=>{
     await this.getCate();
      this.init();
    })()
  },
}
</script>
