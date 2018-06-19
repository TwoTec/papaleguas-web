import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VeeValidate from 'vee-validate'
import pt_BR from 'vee-validate/dist/locale/pt_BR'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pt_BR'
})

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VeeValidate, {
    i18n,
    dictionary: {
      pt_BR
    }
})

const router = new VueRouter({
  routes
})

new Vue({
  i18n,
  el: '#app',
  router,
  render: h => h(App)
})
