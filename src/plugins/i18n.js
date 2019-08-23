import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    es: {
      welcome: 'Bienvenide'
    }
  }
})
