<template>
<div class="container">
    <div class="userInfo">
        <img class="avatar" src="https://img2.baidu.com/it/u=3029321308,247368222&fm=26&fmt=auto" alt="">
        <span class="name">昵称: 金刚芭比</span>
    </div>
    
    <div class="lianjie">
        <span class="cancellation" @click="cancellation">注销</span>
    </div>
    <img class="ad" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0131105b4dd0d0a80121ade0a05978.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637226471&t=6a7623a2ba7d4190cba40aacdee7fec4" alt="">
     <div class="meau" v-for="item in meau" :key='item.icon'>
         <span class="iconfont" v-html="item.icon"></span><span>{{item.desc}}</span>
         <div class="gt iconfont">&#xe604;</div>
     </div>
</div>
<van-cell title="&nbsp;&nbsp;&nbsp;&nbsp;分享" @click="showShare = true" />
        <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        />
   <bottom /> 
</template>
<style scoped lang='scss'>
.userInfo{
    position: relative;
    display: inline-block;
    width: 42%;
    .avatar{
        width: .5rem;
        height: .5rem;
        margin: .2rem;
        border:2px solid black;
        border-radius: 50%;
    }
    .name{
        position: absolute;
        right: 0;
        top: .4rem;
    }
}

.user{
    border: 1px solid black;
    border-radius: 50%;
    font-size: 3em;
    overflow: hidden;
}
.user{
    display: inline-block;
    margin: 25px 0 0 25px;
}
.cancellation{
    margin-right: .12rem;
    text-decoration: underline;
}
.lianjie{
    float: right;
    margin: 25px 0 0 25px;
}
a{
    text-decoration: none;
    color: red;
    margin-right: 10px;
}
.ad{
    width: 96%;
    display: block;
    margin: 0 auto .2rem;
    border-radius: .05rem;
}
.meau{
    position: relative;
    border-top:1px solid #bbb;
    height: .38rem;
    width: 98%;
    margin: 0 auto;
    span{
        line-height: .38rem;
        margin: .05rem;
    }
    .gt{
        position: absolute;
        right: .1rem;
        top: .08rem;
    }
}
.meau:last-child{
    border-bottom: 1px solid #bbb;
}
</style>
<script>
import bottom from '../../components/bottom.vue'
import {useRouter} from 'vue-router'

import { ref } from 'vue';
import { Toast,cell,shareSheet } from 'vant';

const getCancellation=()=>{
    const router = useRouter();
    const cancellation=()=>{
        localStorage.removeItem('isLogin');
        router.push('login')
    }
    return {cancellation}
}
const meau = [{
    icon:'&#xe8b9;',
    desc:'收藏',
    color:'yellow'
},{
    icon:'&#xe614;',
    desc:'足迹',
    color:'yellow'
},{
    icon:'&#xe603;',
    desc:'卡券',
    color:'yellow'
},{
    icon:'&#xe625;',
    desc:'客服',
    color:'yellow'
},{
    icon:'&#xeb80;',
    desc:'设置',
    color:'yellow'
}]
export default {
    components:{bottom,
    [Toast.name]: Toast,
    [cell.name]: cell,
    [shareSheet.name]: shareSheet
    },
    setup(){
        const {cancellation}= getCancellation()

const showShare = ref(false);
const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ];
    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };

        return {cancellation,meau,
        options,
      onSelect,
      showShare,}
    }
}
</script>

