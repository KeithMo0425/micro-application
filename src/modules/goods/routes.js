export default [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/goods/views/About.vue'),
  },
  {
    path: '/about1',
    name: 'about1',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/goods/views/About1.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/goods/views/Home.vue'),
  },
];
