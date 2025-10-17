import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import * as ElIcons from "@element-plus/icons-vue";
import  './mock/index.js';
import router from './router/index.js';
import 'element-plus/dist/index.css'
import store from './store/index.js';
//createApp(App).mount('#app')
const xapp=createApp(App);
for(const name in ElIcons) {
   xapp.component(name, ElIcons[name]);
}
xapp.use(router).use(store).mount('#app');