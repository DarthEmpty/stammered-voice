<template>
  <div id="interactive">
    <login v-if="!loggedIn" @log-in="loggedIn = true"/>

    <v-flex v-if="loggedIn">
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
import Login from "./Login.vue";
import Recorder from "./Recorder.vue";
import CueCard from "./CueCard.vue";

export default {
  name: "Interactive",
  data() {
    return {
      loggedIn: false,
      blob: "",
      records: []
    };
  },
  components: {
    Login,
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
