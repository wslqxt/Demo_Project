//用户登录的axios请求 封装
import request from "@/axios/index.js";
export const Initial = (data) => {
//   return request.post("/login",);
     const res=request({
        method:'post',
        url:'/think/inital',
        data:data,
     });
     return res;
};
export const Select=()=>{
    return request({
        method:'post',
        url:'/think/question',
    })
}
