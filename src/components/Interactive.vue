<template>
  <div id="interactive">
    <login
      v-if="!loggedIn && !micError"
      @sign-up="addCredentials"
      @log-in="checkCredentials"
    />

    <v-flex v-if="loggedIn && !micError">
      <v-layout justify-center fill-height wrap>
        <recorder
          :blob.sync="blob"
          :defaultState="!blob"
          :micError.sync="micError"
        />
        <cue-card
          :nextDisabled="!blob"
          @update:text="store"
        />
      </v-layout>
    </v-flex>

    <mic-error-dialog :micError="micError" />
  </div>
</template>


<script>
import feathers from "@feathersjs/feathers"
import io from "socket.io-client"
import socketio from "@feathersjs/socketio-client"
import authentication from "@feathersjs/authentication-client"

import Login from "./Login.vue"
import Recorder from "./Recorder.vue"
import CueCard from "./CueCard.vue"
import MicErrorDialog from "./MicErrorDialog.vue"

export default {
  name: "Interactive",
  data() {
    return {
      loggedIn: false,
      micError: null,
      blob: "",
      records: [],
      client: null,
      participantsService: null,
      recordingsService: null
    };
  },
  mounted() {
    this.client = feathers()
    this.client.configure(socketio(io("http://localhost:3030")))

    this.client.configure(authentication({
      storage: window.localStorage
    }));

    this.participantsService = this.client.service("participants")
    this.recordingsService = this.client.service("recordings")
  },
  components: {
    Login,
    Recorder,
    CueCard,
    MicErrorDialog
  },
  methods: {
    addCredentials(username, password) {
      this.participantsService.create({ username, password })
      .then(() => this.loggedIn = true)
      .catch(err => this.micError = err)
    },
    checkCredentials(username, password) {
      this.client.authenticate({
        strategy: "local",
        username,
        password
      })
      .then(response => this.client.passport.verifyJWT(response.accessToken))
      .then(payload => this.participantsService.get(payload.participantId))
      .then(participant => {
        this.client.set("participant", participant)
        this.loggedIn = true
      })
      .catch(err => this.micError = err)
    },
    store(text) {
      let record = {
        text,
        blob: this.blob
      };

      this.records.push(record);
      this.blob = "";
    }
  }
}
</script>
