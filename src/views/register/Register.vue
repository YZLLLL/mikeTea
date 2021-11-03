<template>
<h3 align='center'>注册</h3>
  <div class="register">
    <form>
      <van-cell-group inset>
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
        <!-- 允许输入正整数，调起纯数字键盘 -->
        <van-field v-model="text" type="digit" label="用户名" placeholder="请输入用户名" />
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <van-field v-model="number" type="number" label="密码" placeholder="密码须包含大、小写字母、数字" />
        <!-- 输入密码 -->
        <van-field v-model="password" type="password" label="确认密码" placeholder="请确认密码" />
        <van-button round block  type="primary" native-type="submit" @click='register()' class="registerClick">
        注册
      </van-button>
      <router-link to="/login">已有账号，去登录</router-link>
    </van-cell-group>
    </form>
  </div>
  <Toast v-if='data.show' :message="data.message"/>
</template>
<style scoped>
.register{
  margin-top:10%;
  text-align: center;
  overflow: hidden;
}

button{
  margin: .2rem auto;
  width: 30%;
  height: 2em;
  border:none
}
a{
  text-decoration: none;
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
    [button.name]: button},
  setup(){
    const router = useRouter();
    const {showToast,data}=showToastFn();
    const regData = {
      phone:'',
      username:'',
      password:''
    };
    const register=async ()=>{
      try{
    const result =await post('/api/user/register',{phone:regData.phone,username:regData.username,password:regData.password});
    if(result.code==200){
      showToast('注册成功，正在返回登录页');
      setTimeout(()=>{
        router.push({name:'Login'})
      },2000)
    }else{
      showToast("注册失败");
    }
      }catch(e){
        console.log(e);
      }
    };
    return {register,data}
  }
}
</script>