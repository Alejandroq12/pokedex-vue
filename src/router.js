import Vue from 'vue'
import Router from 'vue-router'
import PokemonDetail from './views/PokemonDetail'
import PokemonList from './views/PokemonList.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'PokemonList',
    component: PokemonList
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetail',
    component: PokemonDetail
}
]

export default new Router({
  mode: 'history',
  routes
})
