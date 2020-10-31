import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Compras from '../views/Compras.vue'
import Libros from '../views/Libros.vue'
import Clientes from '../views/Clientes.vue'
import Empleados from '../views/Empleados.vue'
import Editoriales from '../views/Editoriales.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/compras',
    name: 'compras',
    component: Compras
  },
  {
    path: '/libros',
    name: 'libros',
    component: Libros
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/empleados',
    name: 'empleados',
    component: Empleados
  },
  {
    path: '/editoriales',
    name: 'editoriales',
    component: Editoriales
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
