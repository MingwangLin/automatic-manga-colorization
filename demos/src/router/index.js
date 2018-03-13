import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import MangaDecolorization from '../components/models/MangaDecolorization'
import MangaColorization from '../components/models/MangaColorization'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/manga-decolorization', component: MangaDecolorization },
    { path: '/manga-colorization', component: MangaColorization }
  ]
})

export default router
