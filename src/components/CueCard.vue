<template>
  <div id="cue-card">
    <v-flex>
      <v-sheet color="green" class="pa-4" height="350" :width="cardWidth">
        <v-layout column fill-height justify-space-between>

          <v-flex>
            <p class="subheading">
              {{ (textIndex + 1).toString() + "/" + (possibleTexts.length).toString() }}
            </p>
          </v-flex>

          <v-flex grow class="my-3 px-3">
            <h4 class="display-1">{{ possibleTexts[textIndex].phrase }}</h4>
          </v-flex>

          <v-layout row>  
            <v-flex>
              <v-btn medium flat :disabled="nextDisabled" @click="nextText(true)">
                I stammered
              </v-btn>
            </v-flex>

            <v-flex>
              <v-btn medium flat :disabled="nextDisabled" @click="nextText(false)">
                I did not stammer
              </v-btn>              
            </v-flex>
          </v-layout>

        </v-layout>
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
export default {
  name: "CueCard",
  data() {
    return { textIndex: 0 }
  },
  props: [ "possibleTexts", "nextDisabled", "cardWidth" ],
  computed: {
    nextIcon() {
      return this.textIndex === this.possibleTexts.length - 1 ? "undo" : "arrow-right" 
    }
  },
  methods: {
    nextText(stammered) {
      // "stammered" represents whether the user stammered or not

      this.$emit("submit", this.possibleTexts[this.textIndex], stammered)
      this.textIndex = (this.textIndex + 1) % this.possibleTexts.length
      
      if (this.textIndex === 0) {
        this.$emit("request-texts")
      }
    },
  }
}
</script>