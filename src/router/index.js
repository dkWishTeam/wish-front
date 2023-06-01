import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUpView.vue"),
  },
  {
    path: "/wishHistory",
    name: "wishHistory",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WishHistoryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const navigateToHome = () => {
  router.push({ name: "home" });
};

const navigateToLogin = () => {
  router.push({ name: "login" });
};

export default router; // 기본 내보내기로 설정

export { navigateToHome, navigateToLogin };
