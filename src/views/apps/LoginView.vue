<script setup>
import { ref } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { ro } from 'element-plus/es/locales.mjs';
import { useStore } from 'vuex';
import instance from '@/axios/instance';
/* const areas:*/
import {login} from '@/api/userAPI.js'
const router = useRouter();
const store = useStore();
const form = ref({
    username: 'admin',
    password: '123'
})
const msg = ref('');
// import { login } from "@/axios/requestApp.js";  // 确保路径正确
// ... 其他导入 (store, router, ElMessage, form, msg)
const handleLogin = async() => {
  const {username, password} = form.value;
  try {
    const res= await login({username, password});
    const {data}=res;
    store.commit('User/setTokenAndUsername', { token: data.token, username: username });
    router.push({name:'HomeFrame'});
  } catch (error) {
    const {msg, code}=error;
    if(code===201) {
      form.value.password = '';
      console.log("密码错误");
    } else if(code===202) {
      router.push({ path: '/register' });
    } else {
      msg.value = msg || '登录失败，请重试';
      console.log("登录失败，请重试");
    }
  }
};
const handleReset = () => {
    msg.value = "";
    form.value.username = '';
    form.value.password = '';
}
const testMessage = () => {
    console.log('测试消息函数');
    // 测试ElMessage
    ElMessage.success('测试消息！');
}
const handleRegister = () => {
    console.log(form.value)
    axios.post("http://localhoost:8001/login", form.value).then((res) => {
        console.log("服务器响应请求 : 成功");
        console.log(res)
    })
        .catch((err) => {
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
                <el-input v-model="form.username" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="form.password" placeholder="请输入密码" type="password" />
            </el-form-item>
            <el-form-item>
                <div class="button-container">
                    <el-button @click="handleLogin">登录</el-button>
                    <el-button @click="handleReset">重置</el-button>
                    <el-button><router-link to='/register'>注册</router-link></el-button>
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
        left: 50%;
        transform: translate(-50%, -50%);

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