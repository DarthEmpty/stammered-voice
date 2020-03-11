<template>
  <div id="email-dialog">
    <v-dialog
      v-model="open"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Reset Your Password</h3>
        </v-card-title>
        <v-card-text>
          Enter your email address below and we'll send you a link to reset your password from.

          <email-form @submit="onSubmit"/>

        </v-card-text>
        <v-card-actions>
          <v-btn flat color="red" @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>  
</template>


<script>
import EmailForm from "./EmailForm"
import { mapState } from 'vuex'

export default {
  name: "EmailDialog",
  props: [ "open" ],
  components: {
    EmailForm
  },
  computed: mapState(["authManagement"]),
  methods: {
    onSubmit(email) {
      this.authManagement.sendResetPwd({ email })
    },

    close() {
      this.$emit("close")
    }
  }
}
</script>