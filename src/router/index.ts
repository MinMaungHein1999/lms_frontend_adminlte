import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layouts/MainLayout.vue'
import LoginView from '../views/LoginView.vue'
import EmployeeManagement from '../views/EmployeeManagement.vue'
import EditEmployee from '../views/employees/EditEmployee.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView

      },{
        path: '/employee',
        name: 'employee',
        component: EmployeeManagement
      },{
        path: '/employeeEdit',
        name: 'employeeEdit',
        component: EditEmployee
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
