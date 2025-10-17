//用户登录的axios请求 封装
import request from "@/axios/index.js";
export const Login = (data) => {
//   return request.post("/login",);
     const res=request({
        method:'post',
        url:'/user/login',
        data:{username,password},
     });
     
     return res;
};