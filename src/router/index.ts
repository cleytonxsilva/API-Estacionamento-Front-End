import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/condutor-lista',
    name: 'condutor-lista',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/condutor-form',
    name: 'condutor-form',
    component: () => import('../views/condutor/CondutorForm.vue'),
    children: [
      {
        path: '/condutor-form',
        name: 'condutor-form-editar-view',
        component: () => import('../views/condutor/CondutorForm.vue'),
      },
      {
        path: '/condutor-form',
        name: 'condutor-form-excluir-view',
        component: () => import('../views/condutor/CondutorForm.vue'),
      }
    ]
  },

  {
    path: '/marca-lista',
    name: 'marca-lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/marca-form',
    name: 'marca-form',
    component: () => import('../views/marca/MarcaForm.vue'),
    children: [
      {
        path: '/marca-form',
        name: 'marca-form-editar-view',
        component: () => import('../views/marca/MarcaForm.vue'),
      },
      {
        path: '/marca-form',
        name: 'marca-form-excluir-view',
        component: () => import('../views/marca/MarcaForm.vue'),
      }
    ]
  },
  {
    path: '/modelo-lista',
    name: 'modelo-lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/modelo-form',
    name: 'modelo-form',
    component: () => import('../views/modelo/ModeloForm.vue'),
    children: [
      {
        path: '/modelo-form',
        name: 'modelo-form-editar-view',
        component: () => import('../views/modelo/ModeloForm.vue'),
      },
      {
        path: '/modelo-form',
        name: 'modelo-form-excluir-view',
        component: () => import('../views/modelo/ModeloForm.vue'),
      }
    ]
  }, {
    path: '/veiculo-lista',
    name: 'veiculo-lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/veiculo-form',
    name: 'veiculo-form',
    component: () => import('../views/veiculo/VeiculoForm.vue'),
    children: [
      {
        path: '/veiculo-form',
        name: 'veiculo-form-editar-view',
        component: () => import('../views/veiculo/VeiculoForm.vue'),
      },
      {
        path: '/veiculo-form',
        name: 'veiculo-form-excluir-view',
        component: () => import('../views/veiculo/VeiculoForm.vue'),
      }
    ]
  },
  {
    path: '/movimentacao-lista',
    name: 'movimentacao-lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
