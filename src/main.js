import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min.js'
import VueScrollTo from 'vue-scrollto'


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
  render: h => h(App)
})
