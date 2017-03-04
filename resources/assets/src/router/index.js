import Vue from 'vue';
import VueRouter from 'vue-router';

import dashboard from '../views/dashboard';
import notfound from '../views/notfound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: dashboard
  },
  {
    path: '*',
    component: notfound
  }
];

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes
});

export default router;
