import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: {
      name: "landing",
    },
  },
  {
    path: "/landing",
    name: "landing",
    component: () => import("@/views/landding.vue"),
    meta: {
      top: {
        active: false,
        back: null,
        title: null,
      },
      bottom: {
        active: false,
        current: null,
      },
      auth_route: true,
      require_role: [],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
