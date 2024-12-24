export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页',
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/cctd',
    name: 'cctd',
    meta: {
      title: 'cctd',
    },
    component: () => import('@/views/cctd/index.vue'),
  },
  {
    path: '/component',
    name: 'component',
    meta: {
      title: '组件',
    },
    component: () => import('@/views/component/index.vue'),
  },
  {
    path: '/contain',
    name: 'layout',
    meta: {
      title: '导航页',
    },
    children: [
      {
        path: '/contain',
        name: 'menu',
        meta: {
          title: '导航页',
        },
        component: () => import('@/views/contain/index.vue'),
      },
    ],
  },
];
