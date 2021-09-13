import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueCookies from 'vue3-cookies'
//created by : KordianJanowski & StanisławSztrajt ©

createApp(App)
  .use(VueCookies)
  .use(router)
  .mount('#app')
