import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

const router  = new VueRouter({
  routes: Routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
