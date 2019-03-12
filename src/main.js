import Vue from 'vue'
import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VeeValidate from 'vee-validate'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: "fa"
})

Vue.use(VeeValidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
