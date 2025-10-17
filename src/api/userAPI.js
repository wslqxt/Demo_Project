//用户登录的axios请求 封装
import request from "@/axios/index.js";
export const login = (data) => {
//   return request.post("/login",);
     const res=request({
        method:'post',
        url:'/ha',
        data:data,
     });
     return res;
};

