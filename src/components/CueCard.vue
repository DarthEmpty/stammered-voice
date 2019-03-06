<template>
  <div class="cue-card">
    <v-flex>
      <v-card flat color="green" max-width="450" min-height="360">
        <v-card-text class="display-2">{{ text }}</v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>


<script>
export default {
  name: "CueCard",
  data() {
    return {
      text: "Sphinx of Black Quartz, Judge my Vow",
      possibleTexts: []
    }
  },
}
</script>