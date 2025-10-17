// requestapp.js
import instance from "./instance.js";

export const login = (data) => {
  return instance({
    url: '/ha',  // 基 + 此 = /config_cross_area_api/ha，匹配 Java @RequestMapping("/ha")
    method: 'post',  // 这里指定 method
    data  // 请求体，Java 用 @RequestBody 接收
  });
};

export const register = (data) => {
  return instance({
    url: '/ha/register',  // 完整 /config_cross_area_api/ha/register，如果后端路径如此；否则调整为 '/register' 等
    method: 'post',
    data
  });
};