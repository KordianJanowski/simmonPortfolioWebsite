import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CheckCode from '../views/CheckCode.vue'
import Gallery from '../views/Gallery.vue'
import AddGallery from '../views/AddGallery.vue'
import EditGallery from '../views/EditGallery.vue'
import Portfolio from '../views/Portfolio.vue'
import AddPortfolioImage from '../views/AddPortfolioImage.vue'
import EditPortfolioImage from '../views/EditPortfolioImage.vue'
import AddDriveImages from '../views/AddDriveImages.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Panel from '../views/Panel.vue'

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
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    props: true
  },
  {
    path: '/add-gallery',
    name: 'AddGallery',
    component: AddGallery
  },
  {
    path: '/edit-gallery',
    name: 'EditGallery',
    component: EditGallery,
    props: true
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/add-portfolio-image',
    name: 'AddPortfolioImage',
    component: AddPortfolioImage,
  },
  {
    path: '/edit-portfolio-image',
    name: 'EditPortfolioImage',
    component: EditPortfolioImage,
    props: true
  },
  {
    path: '/add-drive-images',
    name: 'AddDriveImages',
    component: AddDriveImages
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
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: {}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
