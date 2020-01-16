import Vue from 'vue'
import VueRouter from 'vue-router'
import Interactive from "./components/Interactive.vue"
import Intro from "./components/Intro.vue"
import Instructions from "./components/Instructions.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: "/", component: Interactive },
    { path: "/intro", component: Intro },
    { path: "/instructions", component: Instructions }
  ]
})