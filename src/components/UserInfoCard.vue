<template>
  <div id="user-info-card">
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

    <see-data-dialog
      :open="seeDataOpen"
      @close="seeDataOpen = false"
    />

    <delete-data-dialog
      :open="deleteDataOpen"
      @close="deleteDataOpen = false"
    />
  </div>
</template>


<script>
import SeeDataDialog from "../components/SeeDataDialog"
import DeleteDataDialog from "../components/DeleteDataDialog"
import { mapState } from 'vuex'

export default {
  name: "UserInfoCard",
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
}
</script>