import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'jquery/dist/jquery.min.js'
import './assets/js/jquery.easing.min.js'
//import './assets/js/scrolling-nav.js'
import 'jquery/dist/jquery.min.js'
// window.jQuery = jQuery
// window.$ = jQuery


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
