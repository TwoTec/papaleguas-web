import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min.js'

import { routes } from './routes/routes.js'

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 900,
  easing: "ease-out",
  offset: -45,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
