import Vue from 'vue'
import Vuex from "vuex"
import feathers from "@feathersjs/feathers"
import io from "socket.io-client"
import socketio from "@feathersjs/socketio-client"
import authentication from "@feathersjs/authentication-client"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client: null
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
    }
  },

  actions: {
    async initDatabaseConnection({ commit }) {
      commit("initDatabaseConnection")
    }
  }
})