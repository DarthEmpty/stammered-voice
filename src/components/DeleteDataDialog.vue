<template>
  <div id="delete-data-dialog">
    <v-dialog
      v-model="open"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Delete Personal Data</h3>
        </v-card-title>
        <v-card-text>
          Enter your credentials into the form below to delete all of the data you've participated.

          <login-form @submit="onSubmit" />

        </v-card-text>
        <v-card-actions>
          <v-btn flat color="red" @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import LoginForm from "./LoginForm"
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "DeleteDataDialog",
  props: [ "open" ],
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters(["recordings"])
  },
  methods: {
    ...mapActions(["authenticateUser"]),

    close() {
      this.$emit('close')
    },

    async onSubmit(email, password) {
      let user = await this.authenticateUser({ email, password })

      if (user) {
        await this.recordings.remove(null, { query: { participantId: user.id } })
      }
      
      this.close()
    }
  }
}
</script>