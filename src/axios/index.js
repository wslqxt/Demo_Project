import axios from "axios";
import requestConfig from "./requestConfig";
import store from "@/store";
import router from "@/router";



const service = axios.create({...requestConfig});


//-------------------------------------------- 请求拦截器 --------------------------------------------//
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
   const username=store.getters['User/getUsername'];
   const token=store.getters['User/getToken'];
   if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
   }
   if(username){
    config.headers['X-User-Name']=username;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求拦截器错误', error);
    return Promise.reject(error);
  }
);

//-------------------------------------------- 响应拦截器 --------------------------------------------//
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const {code, data,msg} = response.data;
    if(code===200) {
        return {code,data};
    } else {
        console.error('业务错误',msg);
        return Promise.reject({
           code, msg
        });
    }
  },
  (error) => {
      // 对响应错误做点什么
        console.error('请求失败', error);
        //统一处理401，token过期,未登录
        if(error.response&&error.response.status===401){
           store.commit('User/clearToken');
           router.push('/login');
           return Promise.reject({code:401,msg:'未登录或登录过期，请重新登录'});
        }

        //其他错误
        return Promise.reject({
           code:error.response?.status||-1,
           msg:error.response?.data?.msg||'网络请求失败'
        });
    }
);

export default service;