<template>
  <div id="user-info-card">
    <v-sheet color="accent" class="pb-3">
      <h1 class="headline pt-5">Logged in as {{ user.username }}</h1>
      
      <p class="subheading py-4">Recordings donated: {{ recordingTotal }}</p>

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

    <see-data-dialog
      :open="seeDataOpen"
      @close="seeDataOpen = false"
    />

    <delete-data-dialog
      :open="deleteDataOpen"
      @close="cleanAfterDelete"
    />
  </div>
</template>


<script>
import SeeDataDialog from "../components/SeeDataDialog"
import DeleteDataDialog from "../components/DeleteDataDialog"
import { mapState, mapGetters } from 'vuex'

export default {
  name: "UserInfoCard",
  data() {
    return {
      recordingTotal: 0,
      seeDataOpen: false,
      deleteDataOpen: false
    }
  },
  components: {
    SeeDataDialog,
    DeleteDataDialog
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["recordings"]),
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