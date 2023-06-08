import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import UserWishMainView from "@/views/wish/UserWishMainView.vue";
import WishCreateView from "@/views/wish/WishCreateView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: { idLogined: true },
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../views/SignUpView.vue"),
    meta: { idLogined: true },
  },
  {
    path: "/myPage",
    name: "myPage",
    component: () => import("../views/MyPageView.vue"),
    meta: { authRequired: true },
  },
  {
    path: "/memberManagement",
    name: "memberManagement",
    component: () => import("../views/MemberManagementView.vue"),
    meta: { authManagerRequired: true },
  },
  {
    path: "/users/:id/wishes",
    name: "UserWishMainView",
    component: UserWishMainView,
  },
  {
    path: "/WishCreate",
    name: "WishCreate",
    component: WishCreateView,
    meta: { authRequired: true },
  },
  {
    path: "/wishes/:wishId/wishHistories",
    name: "wishHistory",
    component: () => import("../views/WishHistoryView.vue"),
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

router.beforeEach(function (to, from, next) {
  // to : 이동할 페이지
  // from : 현재 페이지
  if (to.meta.idLogined && localStorage.getItem("userId") !== null) {
    next("/");
    return;
  }

  if (to.meta.authRequired && localStorage.getItem("userId") == null) {
    next("/");
    return;
  }

  if (
    to.meta.authManagerRequired &&
    localStorage.getItem("userRole") !== "ROLE_ADMIN"
  ) {
    alert("관리자가 아닙니다.");
    //next("/");
    return;
  }

  next();
});

export default router; // 기본 내보내기로 설정

export { navigateToHome, navigateToLogin };
