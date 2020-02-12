<template>
  <div id="interactive">
    <v-layout align-center fill-height column>

    <login
      v-if="!user"
      :disabled.sync="loginDisabled"
      @sign-up="addCredentials"
      @log-in="login"
    />

    <div v-else>
      <cue-card
        :nextDisabled="!blob"
        :cardWidth="cardWidth"
        @submit="store"
        @request-texts="getRandomPhrases"
      />
      <recorder
        :blob.sync="blob"
        :defaultState="!blob"
        :cardWidth="cardWidth"
      />
    </div>
    </v-layout>

  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from "vuex"

import Login from "../components/Login.vue"
import Recorder from "../components/Recorder.vue"
import CueCard from "../components/CueCard.vue"

export default {
  name: "Interactive",
  data() {
    return {
      blob: "",
      loginDisabled: false
    }
  },
  components: {
    Login,
    Recorder,
    CueCard
  },
  computed: {
    ...mapState(["client", "user", "phraseList"]),
    ...mapGetters(["participants", "recordings", "phrases"]),

    cardWidth() {
      return this.$vuetify.breakpoint.xsOnly ? "" : "430.88"
    }
  },
  methods: {
    ...mapActions([
      "authenticateUser",
      "logUserIn",
      "changePhrases",
      "report"
    ]),

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
        this.changePhrases(chosenPhrases)

      } catch (error) {
        this.report(error)
      }
    },

    async login(email, password) {
      try {
        let user = await this.authenticateUser({ email, password })

        if (user) {
          this.logUserIn(user)
          await this.getRandomPhrases()
        }

      } catch (error) {
        this.report(error)
      }
      
      this.loginDisabled = false
    },

    async addCredentials(email, password) {
      try {
        await this.participants.create({ email, password })
        this.login(email, password)

      } catch (error) {
        this.report(error)
        this.loginDisabled = false
      }
    },

    async store(text, stammered) {
      try {
        this.recordings.create({
          participantId: this.user.id,
          textId: text.id,
          sound: this.blob,
          stammered: stammered
        })

        this.blob = ""

      } catch (error) {
        this.report(error)
      }
    }
  }
}
</script>



