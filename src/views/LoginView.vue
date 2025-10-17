<script setup> 
import { ref } from 'vue'; 
import axios from 'axios';
const form=ref({ 
    username:'admin', 
    password:'123' 
}) 
const msg=ref(''); 
const handleLogin=()=>{
    let params={
        username:form.value.username,
        password:form.value.password,
        id:form.value.id
    }  
   console.log(form)   
   // 发送登录请求到后端服务器
   //const x=axios.get('/config_cross_area_api/hel')
   //const x=axios.get('/config_cross_area_api/hel',{params})
   /*const x=axios({
    url:'/config_cross_area_api/hel',
    params,
    method:'get'
   }
   )*/
  /*let method='post'
  const x=axios({
    url: '/config_cross_area_api/ha',
    data:params,
    method
  })*/
 const x=axios.post('/config_cross_area_api/ha',params)
   x.then((res)=>{
    console.log(res)
    console.log(res.data)
    const {msg,code,data}=res.data;
    console.log("=================")
    console.log(msg)
    console.log(code)
    console.log(data)
    console.log("=================")
    if(code===200){
        msg.value="登录成功"
    }
    console.log("请求成功")
   }).catch((err)=>{
    console.log("请求失败")
   })
   console.log("登录请求已发送")
} 
const handleReset=()=>{ 
      msg.value="";  
      form.value.username='';
      form.value.password=''; 
} 
const handleRegister=()=>{ 
    console.log(form.value)
    axios.post("http://localhoost:8001/login",form.value).then((res)=>{
        console.log("服务器响应请求 : 成功");
        console.log(res)
    })
    .catch((err)=>{
        console.log("服务器响应请求 : 失败");
        console.log(err);
    });
    console.log("end handleRegister!!");
} 
</script> 
<template> 
    <div class="login-box"> 
        <div class="login-avatar"> 
            <img src="@/assets/login.png"> 
        </div> 
        <el-form class="login-form"> 
            <el-form-item label="账号:"> 
                <el-input v-model="form.username" placeholder="请输入账号"/> 
            </el-form-item> 
            <el-form-item label="密码:"> 
                <el-input v-model="form.password" placeholder="请输入密码"  
                          type="password" /> 
            </el-form-item> 
            <el-form-item>
                <div class="button-container"> 
                    <el-button @click="handleLogin">登录</el-button> 
                    <el-button @click="handleReset">重置</el-button> 
                    <el-button @click="handleRegister">注册</el-button>  
                </div> 
            </el-form-item> 
            <el-form-item> 
                <p>{{ msg }}</p> 
            </el-form-item> 
        </el-form> 
    </div> 
</template>
<style scoped> 
.login-box {
   background-color: #0f7660f4;
   width: 600px;
   height: 400px;
   border-radius: 10px;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   

   >.login-avatar {
    background-color: red;
    width: 300px;
    height: 300px;
    border-radius: 50%; 
    position: absolute;
    left: 50%;transform: translate(-50%, -50%);
    >img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
   }
   >.login-form {
    background-color: beige;
    width: 400px;
    height: 250px;
    padding: 30px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    box-sizing: border-box;
   }
   .button-container {
    background-color: darkgray;
    width: 100%;
    display: flex;
    justify-content: center;    
   }
}
</style> 