import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import MangaDecolorization from '../components/models/MangaDecolorization'
import MangaColorization from '../components/models/MangaColorization'
import MangaColorizationBig from '../components/models/MangaColorizationBig'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/manga-decolorization', component: MangaDecolorization },
    { path: '/manga-colorization', component: MangaColorization },
    { path: '/manga-colorization-big', component: MangaColorizationBig}
  ]
})

export default router
