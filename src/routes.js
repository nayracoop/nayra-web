import HelloWorld from '@/components/HelloWorld'

// Containers
// import DefaultContainer from './containers/DefaultContainer'

// Views
// import Podcast from './views/Podcast'
// import Cards from './views/Cards'
// import Stories from './views/Stories'
// import Data from './views/Data'
// import Info from './views/Info'

export const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
  // {
  //   path: '',
  //   // name: 'home',
  //   components: {
  //     default: DefaultContainer,
  //     // 'header-top': Header
  //   },
  //   children: [
  //     { path: '/', name: 'podcast', component: Podcast },
  //     // { path: '/socorristas', name: 'podcast', component: Podcast },
  //     { path: '/historias', name: 'stories', component: Stories },
  //     { path: '/datos', name: 'data', component: Data },
  //     { path: '/informacion', name: 'info', component: Info },
  //     { path: '/dispositivo-socorrista', name: 'cards', component: Cards },
  //     { path: '*', redirect: '/' },
  //   ]
  // }
]
