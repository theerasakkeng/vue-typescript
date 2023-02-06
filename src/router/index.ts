import { createRouter, createWebHistory } from "vue-router";

const routes: any = [
  {
    path: "/",
    component: () => import("../views/main/main.vue"),
    // redirect: {
    //   name: "landing",
    // },
  },
  {
    path: "/landing",
    name: "landing",
    component: () => import("@/views/landing.vue"),
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
  // {
  //   path: "/main",
  //   name: "main",
  //   component: () => import("@/views/main/index.vue"),
  //   redirect: {
  //     name: "page-main",
  //   },
  //   meta: {
  //     top: {
  //       active: false,
  //       back: null,
  //       title: null,
  //     },
  //     bottom: {
  //       active: false,
  //       current: null,
  //     },
  //     auth_route: true,
  //     require_role: [],
  //   },
  //   children: [
  //     {
  //       path: "page-main",
  //       name: "page-main",
  //       component: () => import("@/views/main/main.vue"),
  //       meta: {
  //         top: {
  //           active: true,
  //           back: null,
  //           title: null,
  //         },
  //         bottom: {
  //           active: false,
  //           current: "",
  //         },
  //         auth_route: false,
  //         require_role: [],
  //       },
  //     },
  //   ],
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  // mode: "history",
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
