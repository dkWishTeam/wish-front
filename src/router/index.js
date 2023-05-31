import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
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

export default router;
