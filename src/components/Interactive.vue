<template>
  <div id="interactive">
    <v-flex>
      <v-layout align-center justify-space-between fill-height wrap>
        <recorder
          :blob.sync="blob"
        />
        <cue-card
          :nextDisabled="blob === null"
          @update:text="store"
        />
      </v-layout>
    </v-flex>
  </div>
</template>


<script>
import Recorder from "./Recorder.vue"
import CueCard from "./CueCard.vue"

export default {
  name: "Interactive",
  data() {
    return {
      blob: null,
      records: []
    }
  },
  components: {
    Recorder,
    CueCard
  },
  methods: {
    store(text) {
      let record = {
        text,
        blob: this.blob
      }

      this.records.push(record)
      this.text = ""
      this.blob = null
    }
  }
}
</script>
