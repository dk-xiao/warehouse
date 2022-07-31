import { createWebHistory, createRouter } from "vue-router";
import loginPage from "@/components/loginPage";

const routes = [
    {
        path: '/',
        name: 'login',
        component: loginPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;