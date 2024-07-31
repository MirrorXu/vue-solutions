import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/playground",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "about", // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "关于",
    },
  },
  {
    path: "/icons",
    name: "icons",
    component: () =>
      import(/* webpackChunkName: "icons" */ "../views/IconsView.vue"),
    meta: {
      title: "图标库",
    },
  },
  {
    name: "filer",
    path: "/filter",
    component: () =>
      import(/* webpackChunkName: "filter" */ "../views/FiltersView.vue"),
    meta: {
      title: "Vue 过滤器",
    },
  },
  {
    name: "playground",
    path: "/playground",
    component: () =>
      import(
        /* webpackChunkName: "playground" */ "../views/Playground/index.vue"
      ),
    meta: {
      title: "训练场",
    },
  },
  {
    name: "slot",
    path: "/slot",
    component: () =>
      import(/* webpackChunkName: "slot" */ "../views/SlotView.vue"),
    meta: {
      title: "slot插槽",
    },
  },
  {
    name: "buildInComponents",
    path: "/buildInComponents",
    component: () =>
      import(
        /* webpackChunkName: "buildInComponents" */ "../views/BuildInComponentView/index.vue"
      ),
    redirect: "/buildInComponents/transition",
    children: [
      {
        path: "transition",
        name: "transition",
        component: () =>
          import(
            /* webpackChunkName: "transition" */ "../views/BuildInComponentView/TransitionView.vue"
          ),
        meta: { title: "transition组件" },
      },
      {
        path: "keepAlive",
        name: "keepAlive",
        component: () =>
          import(
            /* webpackChunkName: "keepAlive" */ "../views/BuildInComponentView/KeepAliveView.vue"
          ),
        meta: { title: "keepAlive组件" },
      },
    ],
    meta: {
      title: "内置组件",
    },
  },
];

export default routes;

export const NavTree = routes
  .filter((item) => {
    return item.component;
  })
  .map((item) => {
    item.title = item?.meta?.title || item.name;
    return item;
  });
