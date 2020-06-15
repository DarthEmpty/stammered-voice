<template>
  <div id="delete-account-dialog">
    <v-dialog
      v-model="open"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Delete Your Account</h3>
        </v-card-title>
        <v-card-text>
          Enter your credentials into the form below to delete your account from Stammered Voice.

          Your credentials and the data that you've participated will be erased from the database as a result of this action.

          <strong>On submission, you will not be able to log back into Stammered Voice with your original credentials.</strong>

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
  name: "DeleteAccountDialog",
  props: [ "open" ],
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters(["participants", "recordings"])
  },
  methods: {
    ...mapActions([
      "authenticateUser",
      "resetPhrases",
      "logUserOut"
    ]),

    close() {
      this.$emit('close')
    },

    async onSubmit(email, password) {
      let user = await this.authenticateUser({ email, password })

      if (user) {
        this.resetPhrases()
        this.logUserOut()

        this.$router.push("/")

        await this.recordings.remove(null, { query: { participantId: user.id } })

        await this.participants.remove(user.id)
      }

      this.close()
    }
  }
}
</script>