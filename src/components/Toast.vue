<template>
    <span>{{message}}</span>
</template>
<script>
import { reactive } from '@vue/reactivity'

export default{
    props:['message'],
}
export const showToastFn=()=> {
        const data=reactive({show:false,message:''})
        const showToast=(msg)=>{
            data.show=true;
            data.message=msg;
            setTimeout(()=>{
                data.show=false;
                data.message='';
            },2000)
        };
        return {showToast,data}
    }
</script>
<style scoped>
    span{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: .1rem;
        background: rgba(0, 0, 0, .35);
        border-radius: .05rem;
        color: #FFF;
    }
</style>

