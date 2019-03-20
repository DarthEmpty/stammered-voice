<template>
  <div class="cue-card">
    <v-flex grow>
      <v-sheet flat color="green" width="450" height="360" class="py-3">
        <v-layout column fill-height justify-space-between>

          <v-flex>
            <p class="subheading">
              {{ (textIndex + 1).toString() + "/" + (possibleTexts.length).toString() }}
            </p>
          </v-flex>

          <v-flex grow class="my-3 px-3">
            <h4 class="display-1">{{ possibleTexts[textIndex] }}</h4>
          </v-flex>
              
          <v-flex shrink>
            <v-btn large flat icon :disabled="nextDisabled" @click="nextText">
              <v-icon>fas fa-{{ nextIcon }}</v-icon>
            </v-btn>
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
    return { textIndex: 0 }
  },
  props: [ "possibleTexts", "nextDisabled" ],
  computed: {
    nextIcon() {
      return this.textIndex === this.possibleTexts.length - 1 ? "undo" : "arrow-right" 
    }
  },
  methods: {
    nextText() {
      this.$emit("update:text", this.possibleTexts[this.textIndex])
      this.textIndex = (this.textIndex + 1) % this.possibleTexts.length
      
      if (this.textIndex === 0) {
        this.$emit("request-texts")
      }
    },
  }
}
</script>