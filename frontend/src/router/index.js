import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CheckCode from '../views/CheckCode.vue'
import AddGallery from '../views/AddGallery.vue'
import AddPortfolioImage from '../views/AddPortfolioImage.vue'
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/check-code',
    name: 'CheckCode',
    component: CheckCode
  },
  {
    path: '/add-gallery',
    name: 'AddGallery',
    component: AddGallery
  },
  {
    path: '/add-portfolio-image',
    name: 'AddPortfolioImage',
    component: AddPortfolioImage
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
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
