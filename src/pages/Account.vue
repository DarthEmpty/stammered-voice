<template>
  <div id="account">
    <v-sheet color="accent" class="pb-3">
      <h1 class="headline py-5">{{
        user
        ? "Logged in as " + user.username
        : "Not currently logged in..."
        }}</h1>
      
      <v-btn flat color="primary">See Data</v-btn>

      <v-btn flat color="primary">Delete Data</v-btn>
    </v-sheet>

    <router-link :to="'/'">
      <v-btn
        depressed block
        @click="logout"
        color="primary"
      >
        Log Out
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Account",
  data() {
    return {
      seeDataOpen: false,
      deleteDataOpen: false
    }
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["resetPhrases", "logUserOut"]),

    logout() {
      this.resetPhrases()
      this.logUserOut()
    },
  }
}
</script>