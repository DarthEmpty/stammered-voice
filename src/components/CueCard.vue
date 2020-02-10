<template>
  <div id="cue-card">
    <v-flex>
      <v-sheet color="primary" class="pa-4" height="350" :width="cardWidth">
        <v-layout column fill-height justify-space-between>

          <v-flex>
            <p class="subheading">
              {{ (textIndex + 1).toString() + "/" + (phraseList.length).toString() }}
            </p>
          </v-flex>

          <v-flex grow class="my-3 px-3">
            <h4 class="display-1">{{ phraseList[textIndex].phrase }}</h4>
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
import { mapState } from "vuex"

export default {
  name: "CueCard",
  data() {
    return { textIndex: 0 }
  },
  props: [ "nextDisabled", "cardWidth" ],
  computed: {
    ...mapState(["phraseList"]),
    
    nextIcon() {
      return this.textIndex === this.phraseList.length - 1 ? "undo" : "arrow-right" 
    }
  },
  methods: {
    nextText(stammered) {
      // "stammered" represents whether the user stammered or not

      this.$emit("submit", this.phraseList[this.textIndex], stammered)
      this.textIndex = (this.textIndex + 1) % this.phraseList.length
      
      if (this.textIndex === 0) {
        this.$emit("request-texts")
      }
    },
  }
}
</script>