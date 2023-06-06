import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
    meta: { isLogined: true },
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../views/SignUpView.vue"),
    meta: { isLogined: true },
  },
  {
    path: "/myPage",
    name: "myPage",
    component: () => import("../views/MyPageView.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("userId") == null) {
        next("/");
        return;
      }
      next();
    },
  },
  {
    path: "/memberManagement",
    name: "memberManagement",
    component: () => import("../views/MemberManagementView.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("userRole") !== "ADMIN") {
        alert("관리자가 아닙니다.");
        return;
      }
      next();
    },
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
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("userId") == null) {
        alert("로그인을 해주세요");
        next("/login");
        return;
      }
      next();
    },
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
  if (to.meta.isLogined && localStorage.getItem("userId") !== null) {
    next("/");
    return;
  }
  next();
});

export default router; // 기본 내보내기로 설정

export { navigateToHome, navigateToLogin };
