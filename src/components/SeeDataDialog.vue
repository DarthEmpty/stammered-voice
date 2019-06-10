<template>
  <div id="see-data-dialog">
    <v-dialog
      v-model="open" 
      persistent
      hide-overlay="false"
      max-width="500"
    >
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">See Personal Data</h3>
        </v-card-title>
        <v-card-text>
          Enter your credentials into the form below to download all of the data you've participated.
        </v-card-text>
        <v-card-actions>
          <v-btn flat>Submit</v-btn>
          <v-btn flat color="red" @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: "SeeDataDialog",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  props: [ "open" ],
  methods: {
    submit() {

    },

    close() {
      this.$emit('close')
    }
  }
}
</script>
