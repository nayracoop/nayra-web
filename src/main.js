// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { i18n } from './plugins/i18n'
import { routes } from './routes'

library.add([faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faCheckSquare])

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   if (to.hash) {
  //     return { selector: to.hash };
  //   }
  //   return {x: 0, y: 0};
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
