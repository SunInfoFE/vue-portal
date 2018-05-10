// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Sunflower from 'vue-sunflower';
import App from './App';
import router from './router';
import store from './store';
import 'vue-sunflower/css/sf-dark.css';
import Portlets from './portlets';

Vue.use(Sunflower);
Vue.use(Portlets);

Vue.config.productionTip = false;

router.beforeEach(function (to, from, next) {
  if (store.state.userName) {
    next();
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
