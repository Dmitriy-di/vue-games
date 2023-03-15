
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/', component: () => import('pages/v-main.vue'),
      },
      { path: '/catalog', component: () => import('pages/v-catalog.vue') },
      { path: '/cart', component: () => import('pages/v-cart.vue') }

    ]
  },
  {
    path: '/main',
    component: () => import('pages/v-main.vue'),
    children: [
      { path: '/catalog', component: () => import('pages/v-catalog.vue') },

    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
