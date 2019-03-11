<template>
  <div id="interactive">
    <v-flex>
      <v-layout justify-center fill-height wrap>
        <recorder
          :blob.sync="blob"
          :defaultState="!blob"
        />
        <cue-card
          :nextDisabled="!blob"
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
      blob: "",
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
      };

      this.records.push(record);
      this.blob = "";
    }
  }
}
</script>
