import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import LoginView from "@/view/LoginView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            name: "home",
            component: HomeView
        }, 
        {
            path: "/about",
            name: "about",
            component: () => import("../view/AboutView.vue")
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        }
    ]
})

export default router;