import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: import(
      /* webpackChunkName: "LoginView" */ "../views/LoginView.vue"
    ),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "UserView" */ "../views/UserView.vue"),
  },
  {
    path: "/recipe",
    name: "recipe",
    component: () =>
      import(/* webpackChunkName: "RecipeView" */ "../views/RecipeView.vue"),
  },
  {
    path: "user/:id",
    component: () => import(/* webpackChunkName: "UserView" */"../views/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
