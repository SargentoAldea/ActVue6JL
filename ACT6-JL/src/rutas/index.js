import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../vistas/Inicio.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicio },
    { path: '/gastronomia', component: () => import('../vistas/Gastro.vue') },
    { path: '/turismo', component: () => import('../vistas/Tur.vue') },
    { path: '/contacto', component: () => import('../vistas/Contacto.vue') }
  ]
})

export default router