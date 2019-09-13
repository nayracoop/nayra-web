// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faSearchPlus, faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { i18n } from './plugins/i18n'
import { routes } from './routes'

library.add([faPlus, faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faCheckSquare, faSquare, faSearchPlus, faArrowUp, faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin])

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // if (savedPosition) return savedPosition
    // if (to.hash) return { selector: to.hash }
    // return { x: 0, y: 0 }
    return false
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
