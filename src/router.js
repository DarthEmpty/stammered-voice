import Vue from 'vue'
import VueRouter from 'vue-router'
import Interactive from "./components/Interactive"
import Intro from "./components/Intro"
import Instructions from "./components/Instructions"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: "/", component: Interactive },
    { path: "/intro", component: Intro },
    { path: "/instructions", component: Instructions }
  ]
})