import Vue from 'vue'
import Router from 'vue-router'
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage.vue';
import GameKind from '../pages/GameKind.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/game/:id',
      component:GamePage,
    },
    {
      path: '/kinds/:id',
      component:GameKind,
    }
  ]
})
