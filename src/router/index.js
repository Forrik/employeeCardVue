import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Employees from '../components/Employees.vue'
import Profile from '../components/Profile.vue'
import Create from '../components/Create.vue'



const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'employees',
      component: Employees
    },


    {
      path: '/employees/profile/:id/edit',
      name: 'profile',
      component: Profile
    },
    {
      path: '/employees/create',
      name: 'create',
      component: Create
    },


  ]
})

export default router