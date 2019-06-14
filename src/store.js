import Vue from 'vue'
import Vuex from "vuex"
import feathers from "@feathersjs/feathers"
import io from "socket.io-client"
import socketio from "@feathersjs/socketio-client"
import authentication from "@feathersjs/authentication-client"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client: null,
    user: null
  },

  getters: {
    participants: state => state.client.service("participants"),
    recordings: state => state.client.service("recordings"),
    phrases: state => state.client.service("phrases")
  },

  mutations: {
    initDatabaseConnection(state) {
      let serverURL = process.env.NODE_ENV == "production"
      ? "stammered-voice.cs.rhul.ac.uk:443"
      : "localhost:3030"

      state.client = feathers()
      state.client.configure(socketio(io(serverURL)))

      state.client.configure(authentication({
        storage: window.localStorage
      }));
    },

    setUser(state, user) {
      state.user = user
    }
  },

  actions: {
    initDatabaseConnection({ commit }) {
      commit("initDatabaseConnection")
    },

    async checkUser({ commit, state, getters }, credentials) {
      let response = await state.client.authenticate({
        strategy: "local",
        username: credentials.username,
        password: credentials.password
      })
      let payload = await state.client.passport.verifyJWT(response.accessToken)
      let participant = await getters.participants.get(payload.participantId)
      commit("setUser", participant)
    },
  }
})