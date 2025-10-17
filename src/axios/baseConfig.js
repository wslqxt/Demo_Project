// baseConfig.js
export default {
  baseURL: '/config_cross_area_api',  // 修正拼写：baseURL（大写 URL）。相对路径，配合 Vite 代理转发到 Java（http://localhost:8080）

  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },

  timeout: 10000,
  withCredentials: true,
  responseType: 'json'

  // 移除 method: 'post'：不要全局设，每个请求单独指定（Axios 会用实例覆盖）
};