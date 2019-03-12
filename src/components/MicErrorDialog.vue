<template>
  <div id="mic-error-dialog" v-if="micError">
    <v-sheet
      max-width="500px"
      color="red lighten-4"
      class="red--text text--darken-3 pa-5">
      <p class="body-2">{{ micError.message }}</p>
      <p class="body-1">Please resolve this issue, refresh the page and try again.</p>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "MicErrorDialog",
  props: [ "micError" ],
}
</script>