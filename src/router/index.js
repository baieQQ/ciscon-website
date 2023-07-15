import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      meta: { requiresAuth: false }, 
      component: () => import('@/views/index.vue')
    },
    {
      path: '/staff',
      name: 'StaffList',
      meta: { requiresAuth: false }, 
      component: () => import('@/views/StaffList.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.warn(`route: ${from.path} -> ${to.path}`);
  next();
});

export default router
