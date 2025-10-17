
import { createRouter, createWebHashHistory } from "vue-router";

import HomeFrame from "../views/apps/home/HomeFrame.vue";
import store from "../store/index.js";

const homeRoutes = [
    {
        path: '/train/think',
        component: () => import('@/views/train/think/ThinkHome.vue'),
        name: 'ThinkHome',
    },
    {
        path: '/train/hard',
        component: () => import('@/views/train/hard/HardHome.vue'),
        name: 'HardHome',
    },
    {
        path: '/train/soft',
        component: () => import('@/views/train/soft/SoftHome.vue'),
        name: 'SoftHome',
    },
    {
        path: '/pract/central',
        component: () => import('@/views/pract/central/CentralHome.vue'),
        name: 'CentralHome',
    },
    {
        path: '/pract/enterprise',
        component: () => import('@/views/pract/enterprise/EnterpriseHome.vue'),
        name: 'EnterpriseHome',
    },
];
const routes = [{
    path: '/',
    component: HomeFrame,
    name: 'HomeFrame',
    children: homeRoutes,
    meta: { requiresAuth: true },
}, {
    path: '/login',
    component: () => import('@/views/apps/LoginView.vue'),
    name: 'LoginView',
    meta: { requiresAuth: false },
}, {
    path: '/register',
    component: () => import('@/views/apps/RegisterView.vue'),
    name: 'RegisterView',
    meta: { requiresAuth: false },
}, {
    path: '/error',
    component: () => import('@/views/apps/ErrorView.vue'),
    name: 'ErrorView',
    meta: { requiresAuth: false },
}];
const history = createWebHashHistory(import.meta.env.BASE_URL)
const router = createRouter({
    routes,
    history,
});
router.beforeEach((to, from) => {
    const isLogin = store.getters['User/isLogin'];
    if (to.path === '/login') {
        if (isLogin) {
            return { path: '/' };
        } else {
            //放行，继续访问登录页
            return true;
        }
    }
    if (to.meta.requiresAuth) {
        if (isLogin===true) {
            return true;
        } else {
            return { path: '/login' };
        }
    }
});
export default router;

