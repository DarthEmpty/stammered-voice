import Vue from 'vue'
import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import VeeValidate from 'vee-validate'
import store from "./store"
import router from "./router"
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, { iconfont: "fa" })
Vue.use(VeeValidate)

store.dispatch("initDatabaseConnection")

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
