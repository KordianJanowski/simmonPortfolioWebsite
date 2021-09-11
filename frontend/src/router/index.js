import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginPanel from '../views/LoginPanel.vue'
import Download from '../views/Download.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panel',
    name: 'LoginPanel',
    component: LoginPanel
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
