<template>
  <div id="user-info-card">
    <v-sheet color="accent" class="pb-3">
      <h1 class="headline pt-5">Logged in as {{ user.email }}</h1>
      
      <p class="subheading pt-4">Recordings donated: {{ recordingTotal }}</p>

      <p class="subheading pb-4">{{ user.isVerified ? "Verified!" : "Look for an email from us to verify your account." }}</p>

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

      <div />

      <v-btn
        flat
        color="error"
        @click.stop="deleteAccountOpen = true"
      >
        Delete Account
      </v-btn>
    </v-sheet>

    <see-data-dialog
      :open="seeDataOpen"
      @close="seeDataOpen = false"
    />

    <delete-data-dialog
      :open="deleteDataOpen"
      @close="cleanAfterDelete"
    />

    <delete-account-dialog
      :open="deleteAccountOpen"
      @close="deleteAccountOpen = false"
    />
  </div>
</template>


<script>
import SeeDataDialog from "../components/SeeDataDialog"
import DeleteDataDialog from "../components/DeleteDataDialog"
import DeleteAccountDialog from "../components/DeleteAccountDialog"
import { mapState, mapGetters } from 'vuex'

export default {
  name: "UserInfoCard",
  data() {
    return {
      recordingTotal: 0,
      seeDataOpen: false,
      deleteDataOpen: false,
      deleteAccountOpen: false,
    }
  },
  components: {
    SeeDataDialog,
    DeleteDataDialog,
    DeleteAccountDialog,
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["participants", "recordings"]),
  },
  methods: {
    async countRecordings() {
      let res = await this.recordings.find({
        query: {
          participantId: this.user.id,
          $limit: 0
        }
      })

      this.recordingTotal = res.total
    },

    async cleanAfterDelete() {
      this.deleteDataOpen = false
      await this.countRecordings()
    }
  },
  async mounted() {
    this.countRecordings()
  }
}
</script>