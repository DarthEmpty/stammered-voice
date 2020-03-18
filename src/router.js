import Vue from 'vue'
import VueRouter from 'vue-router'

import { About, Account, Guide, Interactive, Policy, Verify } from "./pages"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Interactive },
    { path: "/about", component: About },
    { path: "/guide", component: Guide },
    { path: "/account", component: Account },

    { path: "/policy/:filename", component: Policy },
    { path: "/verify", component: Verify },
  ]
})