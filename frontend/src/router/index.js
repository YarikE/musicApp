import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/home/HomePage.vue")
    },
    {
      path: '/favorites/',
      name: 'FavoritesPage',
      component: () => import("../views/favorites/FavoritesPage.vue")
    },
    {
      path: '/add-new/',
      name: 'Add New',
      component: () => import("../views/add_new/AddNewPage.vue")
    },
  ]
})

export default router
