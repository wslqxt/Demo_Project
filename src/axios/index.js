import axios from "axios";
import requestConfig from "./requestConfig";
import store from "@/store";
import router from "@/router";

const service = axios.create({ ...requestConfig });

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const username = store.getters['User/getUsername'];
    const token = store.getters['User/getToken'];
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    if (username) {
      config.headers['X-User-Name'] = username;
    }
    return config;
  },
  (error) => {
    console.error('请求拦截器错误', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { code, data, msg } = response.data;
    if (code === 200) {
      return { code, data, msg };
    } else {
      console.error('业务错误', msg);
      return Promise.reject({ code, msg });
    }
  },
  (error) => {
    console.error('请求失败', error);
    if (error.response && error.response.status === 401) {
      store.commit('User/clearToken');
      router.push('/login');
      return Promise.reject({ code: 401, msg: '未登录或登录过期，请重新登录' });
    }
    return Promise.reject({
      code: error.response?.status || -1,
      msg: error.response?.data?.msg || '网络请求失败',
    });
  }
);

export default service;