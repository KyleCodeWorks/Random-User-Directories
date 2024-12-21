import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundview.vue'
import UserDetailsView from '@/views/UserDetailsView.vue'
import UserDirectoryView from '@/views/UserDirectoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/userDirectory/',
      name: 'user-directory',
      component: UserDirectoryView,
    },
    {
      path: '/userDetails/:id',
      name: 'user-details',
      component: UserDetailsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },

  ],
})

export default router
