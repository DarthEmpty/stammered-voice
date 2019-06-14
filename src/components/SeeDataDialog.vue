<template>
  <div id="see-data-dialog">
    <v-dialog
      v-model="open"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">See Personal Data</h3>
        </v-card-title>
        <v-card-text>
          Enter your credentials into the form below to download all of the data you've participated.

          <login-form />

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

export default {
  name: "SeeDataDialog",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  props: [ "open" ],
  components: {
    LoginForm
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
