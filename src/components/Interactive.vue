<template>
  <div id="interactive">
    <login v-if="phraseList.length === 0 && !error" @sign-up="addCredentials" @log-in="login"/>

    <v-flex v-if="phraseList.length > 0 && !error">
      <v-layout justify-center fill-height row wrap>
        <recorder :blob.sync="blob" :defaultState="!blob" :micError.sync="error"/>
        <cue-card
          :possibleTexts="phraseList"
          :nextDisabled="!blob"
          @update:text="store"
          @request-texts="getRandomPhrases"
        />
      </v-layout>

      <v-btn large flat @click="logout">
        Log Out
      </v-btn>
    </v-flex>

    <error-dialog v-if="error" :error="error"/>
  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from "vuex"

import Login from "./Login.vue"
import Recorder from "./Recorder.vue"
import CueCard from "./CueCard.vue"
import ErrorDialog from "./ErrorDialog.vue"

export default {
  name: "Interactive",
  data() {
    return {
      error: null,
      blob: "",
      phraseList: []
    }
  },
  components: {
    Login,
    Recorder,
    CueCard,
    ErrorDialog
  },
  computed: {
    ...mapState(["client", "user"]),
    ...mapGetters(["participants", "recordings", "phrases"])
  },
  methods: {
    ...mapActions(["authenticateUser", "logUserIn", "logUserOut"]),

    report(error) {
      this.$emit("notify", error.message)
    },

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

    async login(username, password) {
      try {
        let user = await this.authenticateUser({ username, password })

        if (user) {
          this.logUserIn(user)
          await this.getRandomPhrases()
        }

      } catch (error) {
        this.report(error)
      }
    },

    logout() {
      this.logUserOut()
      this.phraseList = []
    },

    async addCredentials(username, password) {
      try {
        await this.participants.create({ username, password })
        this.login(username, password)

      } catch (error) {
        this.error = error
      }
    },

    async store(text) {
      try {
        this.recordings.create({
          participantId: this.user.id,
          textId: text.id,
          sound: this.blob
        })

        this.blob = ""

      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
