<template>
  <div id="interactive">
    <login
      v-if="!participant && !error"
      @sign-up="addCredentials"
      @log-in="checkCredentials"
    />

    <v-flex v-if="participant && !error">
      <v-layout justify-center row wrap>
        <recorder
          :blob.sync="blob"
          :defaultState="!blob"
          :micError.sync="error"
        />
        <cue-card
          :possibleTexts="phraseList"
          :nextDisabled="!blob"
          @update:text="store"
          @request-texts="getRandomPhrases"
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
    async getRandomPhrases() {
      try {
        // Get total number of phrases if not already known
        if (this.phrases.total === undefined) {
          let res = await this.phrases.find({ query: { $limit: 0 } })
          this.phrases.total = res.total
        }

        // Throw an error if there are no phrases in the database
        if (this.phrases.total === 0) {
          throw new Error("No phrases in the database")
        }

        // Generate 5 (or fewer) random unique ids between 1 and total number of phrases
        let ids = new Set()
        while (ids.size < this.phrases.total && ids.size < 5) {
          ids.add(Math.ceil(Math.random() * this.phrases.total))
        }
  
        // Get corresponding phrases
        let chosenPhrases = await Promise.all(
          Array.from(ids).map(id => this.phrases.get(id))
        )

        // Put phrases in the phrase list
        this.phraseList = chosenPhrases

      } catch (error) {
        this.error = error
      }
      
    },

    async checkCredentials(username, password) {
      try {
        let response = await this.client.authenticate({
          strategy: "local",
          username,
          password
        })
        let payload = await this.client.passport.verifyJWT(response.accessToken)
        let participant = await this.participants.get(payload.participantId)
        
        await this.getRandomPhrases()
        this.participant = participant
        
      } catch (error) {
        this.error = error
      }
    },

    async addCredentials(username, password) {
      try {
        await this.participants.create({ username, password })
        this.checkCredentials(username, password)
        
      } catch (error) {
        this.error = error
      }
    },

    async store(text) {
      try {
        this.recordings.create({
          participantId: this.participant.id,
          textId: text.id,
          sound: this.blob
        })

        this.blob = "";
        
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
