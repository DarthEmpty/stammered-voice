<template>
  <div id="account">
    <v-sheet v-if="!user" color="accent">
      <h1 class="headline py-5">
        Not currently logged in...
      </h1>
    </v-sheet>

    <div v-else>
      <v-sheet color="accent" class="pb-3">
        <h1 class="headline py-5">Logged in as {{ user.username }}</h1>
        
        <v-btn
          flat 
          color="primary" 
          @click.stop="seeDataOpen = true"
        >
          See Data
        </v-btn>

        <v-btn
          flat 
          color="primary"
          @click.stop="deleteDataOpen = true"
        >
          Delete Data
        </v-btn>
      </v-sheet>

      <router-link :to="'/'">
        <v-btn
          depressed block
          color="primary"
          @click="logout"
        >
          Log Out
        </v-btn>
      </router-link>

      <see-data-dialog
        :open="seeDataOpen"
        @close="seeDataOpen = false"
      />

      <delete-data-dialog
        :open="deleteDataOpen"
        @close="deleteDataOpen = false"
      />
    </div>
  </div>
</template>


<script>
import SeeDataDialog from "../components/SeeDataDialog"
import DeleteDataDialog from "../components/DeleteDataDialog"
import { mapState, mapActions } from 'vuex'

export default {
  name: "Account",
  data() {
    return {
      seeDataOpen: false,
      deleteDataOpen: false
    }
  },
  components: {
    SeeDataDialog,
    DeleteDataDialog
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