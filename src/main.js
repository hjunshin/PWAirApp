import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { firebaseConfig } from './firebase-config';
import './assets/reset.css';
import './assets/style.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'
import App from './App.vue';

firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
