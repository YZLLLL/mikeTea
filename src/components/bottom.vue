<template>
    <footer>
      <router-link 
      v-for="(item,index) in navigation" 
      :key="index" 
      :to="item.path"
      :class='{"active":index==currentPath}'
      ><div @click="changeCurrentPath(index)"><span class="iconfont" v-html="item.icon"></span><div>{{item.desc}}</div></div>
      </router-link>
    </footer>
</template>
<style scoped type="scss">
    footer{
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 5px 0;
      box-shadow: 0 -1px 10px #888;
      background-color: #fff;
      justify-content: space-around;
      text-align: center;
    }
    .active{
      color: skyblue;
    }
    footer a{
      display: block;
      text-decoration: none;
      color: #000;
    }
</style>
<script>
import {ref} from 'vue'
    const currentPath = ref(0);
export default {
name:"bottom",
  setup() {
    const navigation=[
      {
        path:'/',
        icon:'&#xe751;',
        desc:'首页'
      },{
        path:'/order',
        icon:'&#xe63f;',
        desc:'订单'
      },{
        path:'/mine',
        icon:'&#xe8a0;',
        desc:'我的'
      },
    ];
    const changeCurrentPath=(index)=>{
      currentPath.value=index;
    }
    return {navigation,currentPath,changeCurrentPath}
  },
}
</script>

