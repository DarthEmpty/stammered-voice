<template>
  <div class="cue-card">
    <v-flex>
      <v-sheet flat
        color="green"
        max-width="450"
        min-height="360"
        class="py-5"
      >
        <v-layout column fill-height justify-space-between>
          <v-flex class="my-5">
            <p class="display-2">{{ text }}</p>
          </v-flex>
        </v-layout>
      </v-sheet>
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