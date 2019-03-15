<template>
  <div id="error-dialog">
    <v-sheet
      max-width="500px"
      color="red lighten-4"
      class="red--text text--darken-3 pa-5"
    >
      <p class="body-2">{{ message }}</p>
      <p class="body-1">Please refresh the page, resolve this issue and try again.</p>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "ErrorDialog",
  props: [ "error" ],
  computed: {
    message() {
      return this.error.type === "FeathersError"
        ? this.error.errors.map(error => error.message).join("\n")
        : this.error.message
    }
  }
}
</script>