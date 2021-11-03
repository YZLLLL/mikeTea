<template>
<h3 align='center'>登录</h3>
  <div class="login">
    <form>
      <van-cell-group inset>
        <van-field v-model="text" label="用户名" placeholder="请输入用户名"/>
        <van-field v-model="password" type="password" label="密码" placeholder="密码须包含大、小写字母、数字" />
      </van-cell-group>
      <van-button round block  type="primary" native-type="submit" @click='login()' class="login">
        登录
      </van-button>
      <router-link to="/register">去注册</router-link>
    </form>
    <Toast v-if='data.show' :message="data.message"/>
  </div>
</template>
<style scoped>


form{
  margin-top: 10%;
}

.login{
  text-align: center;
  overflow: hidden;
}

button{
  width: 30%;
  height: 2em;
  border:none;
  margin: .2rem auto;
}
a{
  display: inline-block;
  color: #000;
}
</style>
<script>
import {post} from '../../untils/myAxios'
import {useRouter} from 'vue-router'
import Toast,{showToastFn} from '../../components/Toast'
import {cellGroup,field,button} from 'vant'
export default{
  components:{Toast,
    [cellGroup.name]: cellGroup,
    [field.name]: field,
    [button.name]: button
  },
  setup(){
    const router=useRouter();
    const {showToast,data}=showToastFn();
    const login =async ()=>{
      try{
        const result = await post('/api/user/login',{username:'username',password:'password'});
        if(result.code==200){
          localStorage.isLogin=true;
          router.push({name:"Home"});
        }else{
          showToast('用户名或密码错误');
        }
      }catch(e){
        showToast('请求失败')
        console.log(e);
      }
    };
    return {login,data}
  }
}
</script>