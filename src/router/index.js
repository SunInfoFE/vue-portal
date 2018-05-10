import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/home/Login';
import Home from '@/pages/Home';
import Page from '@/home/Page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {name: '首页'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { name: '首页' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
});
