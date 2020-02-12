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
    user: null,
    phraseList: [],
    errorMessage: ""
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
    },

    setPhraseList(state, list) {
      state.phraseList = list
    },

    setErrorMessage(state, message) {
      state.errorMessage = message
    }
  },

  actions: {
    initDatabaseConnection({ commit }) {
      commit("initDatabaseConnection")
    },

    async authenticateUser({ state, getters }, credentials) {
      let response = await state.client.authenticate({
        strategy: "local",
        email: credentials.email,
        password: credentials.password
      })
      let payload = await state.client.passport.verifyJWT(response.accessToken)
      return await getters.participants.get(payload.participantId)
    },
    
    logUserIn({ commit }, participant) {
      commit("setUser", participant)
    },

    logUserOut({ commit, state }) {
      state.client.logout()
      commit("setUser", null)
    },

    changePhrases({ commit }, list) {
      commit("setPhraseList", list)
    },

    resetPhrases({ commit }) {
      commit("setPhraseList", [])
    },

    report({ commit }, error) {
      if (error.type === "FeathersError" && error.name !== "Timeout") {
        error.message = error.errors.map(subError => subError.message).join("\n")
      }

      commit("setErrorMessage", "ERROR: " + error.message)
    },
  }
})