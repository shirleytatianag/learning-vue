import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import LoginView from "@/view/LoginView.vue";
import UserView from "@/view/UserView.vue";
import ProductView from "@/view/ProductView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/app",
            name: "app",
            component: HomeView,
            children: [
                {
                    path: "user",
                    component: UserView
                },
                {
                    path: "product",
                    component: ProductView
                },
            ]
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