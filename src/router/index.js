import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendars from '../views/Calendar.vue'
import Tasks from '../views/Tasks.vue'
import studentList from '../views/Teams.vue'
import studentAdd from '../views/addStudents.vue'
import assignTeam from '../views/assignTeams.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendars
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Tasks
    
  },
  {
    path: '/studentlist',
    name: 'Student List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: studentList
    
  },
  {
    path: '/addstudent',
    name: 'Add Student',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: studentAdd
    
  },
  {
    path: '/assignteam',
    name: 'Assign Teams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: assignTeam
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    
  }
]

const router = new VueRouter({
  routes
})

export default router
