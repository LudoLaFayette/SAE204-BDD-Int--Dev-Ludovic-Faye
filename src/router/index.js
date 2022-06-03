import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistePageView from "../views/ArtistePageView.vue"
import ContactView from '../views/ContactView.vue'
import HistoireView from '../views/HistoireView.vue'
import ListeArtisteView from '../views/ListeArtisteView.vue'
import ListeConcertView from '../views/ListeConcertView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import PageConcertView from '../views/PageConcertView.vue'
import Page404View from '../views/Page404View.vue'
import StyleGuideView from '../views/StyleGuideView.vue'
import CreateConcertView from '../views/concert/CreateConcertView.vue'
import ListeConcertV2View from '../views/concert/ListeConcertV2View.vue'
import DeleteConcertView from '../views/concert/DeleteConcertView.vue'
import UpdateConcertView from '../views/concert/UpdateConcertView.vue'

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
    { path: '/concert', name: 'PageConcertView', component: PageConcertView }, // '/:pathMatch(.*)*'
    { path: '/:pathMatch(.*)*', name: '404View', component: Page404View },
    { path: '/styleGuide', name: 'StyleGuide', component: StyleGuideView },
    { path: '/createConcert', name: 'CreateConcert', component: CreateConcertView },
    { path: '/listeConcertV2', name: 'ListeConcertV2', component: ListeConcertV2View },
    { path: '/deleteConcert/:id', name: 'DeleteConcert', component: DeleteConcertView },
    { path: '/updateConcert/:id', name: 'UpdateConcert', component: UpdateConcertView },
  ]
})

export default router
