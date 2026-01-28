import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import CreateWishlistPage from '../pages/CreateWishlistPage.vue'
import WishlistPage from '../pages/WishlistPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/create',
    name: 'create',
    component: CreateWishlistPage
  },
  {
    path: '/wishlist/:id',
    name: 'wishlist',
    component: WishlistPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router