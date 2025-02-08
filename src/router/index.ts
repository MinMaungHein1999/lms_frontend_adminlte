import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layouts/MainLayout.vue'
import LoginView from '../views/LoginView.vue'
import UserListing from '../views/users/UserListing.vue'
import UserProfile from '../views/users/UserProfile.vue'
import UserForm from '../views/users/UserForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/users/:id',
        name: 'userProfile',
        component: UserProfile,
        props: true
      }, {
        path: '/users/edit/:id',
        name: 'userEdit',
        component: UserForm,
        props: true
      },
      {
        path: '/users',
        name: 'users',
        component: UserListing
      },
      {
        path: '/newUser',
        name: 'newUser',
        component: UserForm
      }
      , {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
