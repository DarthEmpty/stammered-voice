import Vue from 'vue'
import VueRouter from 'vue-router'
import Interactive from "./components/Interactive"
import About from "./components/About"
import Guide from "./components/Guide"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Interactive },
    { path: "/about", component: About },
    { path: "/guide", component: Guide }
  ]
})