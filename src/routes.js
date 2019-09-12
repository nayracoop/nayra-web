import Main from '@/views/Main'
import { i18n } from './plugins/i18n'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/:lang',
    name: 'locale',
    component: Main,
    beforeEnter (to, from, next) {
      const locale = (![ 'en', 'es' ].includes(to.params.lang)) ? 'es' : to.params.lang
      if (i18n.locale !== locale) {
        import(`./translations/${locale}.json`).then(msgs => {
          i18n.setLocaleMessage(locale, msgs)
          i18n.locale = locale
          return next()
        })
      } else return next()
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
