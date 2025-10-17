<script setup>
import { ref } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { ro } from 'element-plus/es/locales.mjs';
import { useStore } from 'vuex';
import instance from '@/axios/instance';
/* const areas:*/

const router = useRouter();
const store = useStore();
const form = ref({
    username: 'admin',
    password: '123'
})
const msg = ref('');
import { login } from "@/axios/requestApp.js";  // 确保路径正确
// ... 其他导入 (store, router, ElMessage, form, msg)

const handleLogin = () => {
  login(form.value)
    .then((res) => {
      // 关键修复：后端数据在 res.data 中
    //   const { code, msg: serverMsg, data } = res.data || {};  // 防 res.data undefined
      const { code, msg, data } = res.data;
      if (code === 200) {
        let payload = {
          token: data.token,  // 假设 data: { token: 'xxx' }
          username: form.value.username,
        };
        store.commit("User/setTokenAndUsername", payload);
        router.push("/");
        ElMessage.success("登录成功");
      } else if (code === 201) {
        form.value.password = '';
        form.value.username = '';
        msg.value = `${msg}, 请重新输入！！！`;
        ElMessage.error(msg.value);
      } else {
        form.value.password = '';
        form.value.username = '';
        msg.value = `异常业务：${msg}`;
        ElMessage.error(msg.value);
      }
    })
    .catch((err) => {
      console.error('登录请求失败详情:', err);  // 增强日志：查看 err.response / err.message
      msg.value = "操作异常";

      // 可选：更友好错误提示
      if (err.response) {
        // 服务器响应了，但状态码异常（如 404/500）
        msg.value += ` (状态: ${err.response.status})`;
      } else if (err.request) {
        // 请求发出但无响应（网络/服务器宕机）
        msg.value += " (网络错误，请检查连接)";
      } else {
        // 配置错误
        msg.value += ` (配置错误: ${err.message})`;
      }
      ElMessage.error(msg.value);
    });
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