<template>
    <h3><span class="iconfont shop">&#xe63d;</span> 附近商家</h3>
      <router-link :to="`/shop/${items._id}`"  v-for='(items,index) in course' :key='index'>
        <shop-info :item="items" :showBorder="true" />
      </router-link>
</template>
<style scoped lang='scss'>
h3{
  margin-top: .2rem;
  text-indent: 5%;
}
a{
  text-decoration: none;
  color: #000;
}
// .shop{
//   color:red;
// }
</style>
<script>
import {get} from "../../untils/myAxios"
import shopInfo from "../../components/shopInfo"
import ShopInfo from '../../components/shopInfo.vue';
export default {
  components:{shopInfo},
  data() {
    ShopInfo
    return {
      course:[]
    };
  },
  methods: {
    async getdata() {
      try {
        let data = await get("/api/getCourse");
        this.course = data;
      } catch (error) {
        return error;
      }
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>
