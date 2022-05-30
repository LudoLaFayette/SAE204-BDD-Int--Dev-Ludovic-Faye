import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistePageView from "../views/ArtistePageView.vue"
import ContactView from '../views/ContactView.vue'
import HistoireView from '../views/HistoireView.vue'
import ListeArtisteView from '../views/ListeArtisteView.vue'
import ListeConcertView from '../views/ListeConcertView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import PageConcertView from '../views/PageConcertView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/artiste', name: 'ArtisteView', component: ArtistePageView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/histoire', name: 'HistoireView', component: HistoireView },
    { path: '/artisteListe', name: 'ListeArtisteView', component: ListeArtisteView },
    { path: '/concertListe', name: 'ListeConcertView', component: ListeConcertView },
    { path: '/mentions', name: 'MentionsLegalesView', component: MentionsLegalesView },
    { path: '/concert', name: 'PageConcertView', component: PageConcertView },
  ]
})

export default router
