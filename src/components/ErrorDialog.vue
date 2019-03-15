<template>
  <div id="error-dialog" v-if="error">
    <v-sheet
      max-width="500px"
      color="red lighten-4"
      class="red--text text--darken-3 pa-5">
      <p class="body-2">{{ error.message }}</p>
      <p class="body-1">Please refresh the page, resolve this issue and try again.</p>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "ErrorDialog",
  props: [ "error" ],
}
</script>