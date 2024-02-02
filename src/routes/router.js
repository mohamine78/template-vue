import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/form.vue';
import Dashboard from '@/components/dashboard.vue';

const routes = [
    { path: '/', redirect: '/login', name: 'Login', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/home', name: 'Home', component: Dashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;