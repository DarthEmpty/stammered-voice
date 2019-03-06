<template>
  <div class="cue-card">
    <v-flex>
      <v-sheet flat color="green" max-width="450" height="360" class="py-3">
        <v-layout column fill-height justify-space-between>
          <v-flex class="my-5">
            <p class="display-2">{{ text }}</p>
          </v-flex>

          <v-flex>
            <v-layout row justify-space-between>

              <v-flex>
                <v-btn large flat icon>
                  <v-icon>fas fa-arrow-left</v-icon>
                </v-btn>
              </v-flex>

              <v-spacer />

              <v-flex>
                <v-btn large flat icon>
                  <v-icon>fas fa-arrow-right</v-icon>
                </v-btn>
              </v-flex>

            </v-layout>
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