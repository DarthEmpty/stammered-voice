<template>
  <div id="account">
    <v-sheet v-if="!user" color="accent">
      <h1 class="headline py-5">
        Not currently logged in...
      </h1>
    </v-sheet>

    <div v-else>
      <user-info-card/>

      <router-link :to="'/'">
        <v-btn
          depressed block
          color="primary"
          @click="logout"
        >
          Log Out
        </v-btn>
      </router-link>
    </div>
  </div>
</template>


<script>
import UserInfoCard from "../components/UserInfoCard"
import { mapState, mapActions } from 'vuex'

export default {
  name: "Account",
  components: {
    UserInfoCard
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