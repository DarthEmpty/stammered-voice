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
            <p class="display-1">{{ possibleTexts[textIndex] }}</p>
          </v-flex>
              
          <v-flex shrink>
            <v-btn large flat icon @click="nextText">
              <v-icon>fas fa-arrow-right</v-icon>
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
    return {
      textIndex: 0,
      possibleTexts: [
        "Sphinx of black quartz, judge my vow",
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
        "Small",
        "To err is human"
      ]
    }
  },
  methods: {
    shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]]
      }
    },

    nextText() {
      this.textIndex = (this.textIndex + 1) % this.possibleTexts.length
      
      if (this.textIndex === 0) {
        this.shuffle(this.possibleTexts)
      }
    }
  },
  created() {
    this.shuffle(this.possibleTexts)
  }
}
</script>