<template>
  <div id="interactive">
    <login
      v-if="!participant && !error"
      @sign-up="addCredentials"
      @log-in="checkCredentials"
    />

    <v-flex v-if="participant && !error">
      <v-layout justify-center fill-height wrap>
        <recorder
          :blob.sync="blob"
          :defaultState="!blob"
          :micError.sync="error"
        />
        <cue-card
          :possibleTexts="phraseList"
          :nextDisabled="!blob"
          @update:text="store"
        />
      </v-layout>
    </v-flex>

    <error-dialog v-if="error" :error="error" />
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
import ErrorDialog from "./ErrorDialog.vue"

export default {
  name: "Interactive",
  data() {
    return {
      participant: null,
      error: null,
      blob: "",
      phraseList: [],

      client: null,
      participants: null,
      recordings: null,
      phrases: null
    };
  },
  mounted() {
    this.client = feathers()
    this.client.configure(socketio(io("http://localhost:3030")))

    this.client.configure(authentication({
      storage: window.localStorage
    }));

    this.participants = this.client.service("participants")
    this.recordings = this.client.service("recordings")
    this.phrases = this.client.service("phrases")
  },
  components: {
    Login,
    Recorder,
    CueCard,
    ErrorDialog
  },
  methods: {
    checkCredentials(username, password) {
      this.client.authenticate({
        strategy: "local",
        username,
        password
      })
      .then(response => this.client.passport.verifyJWT(response.accessToken))
      .then(payload => this.participants.get(payload.participantId))
      .then(participant => {
        this.getPhrases()
        this.participant = participant
      })
      .catch(err => this.error = err)
    },

    addCredentials(username, password) {
      this.participants.create({ username, password })
      .then(() => this.checkCredentials(username, password))
      .catch(err => this.error = err)
    },

    getPhrases() {
      this.phrases.find()
      .then(response => {
        console.log(response)
        this.phraseList = response.data.map(obj => obj.phrase)
      })
      .catch(err => this.error = err)
    },

    store(text) {
      this.recordings.create({
        participantId: this.participant.id,
        text,
        sound: this.blob
      })
      .catch(err => this.error = err)

      this.blob = "";
    }
  }
}
</script>
