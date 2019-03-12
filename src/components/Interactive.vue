<template>
  <div id="interactive">
    <login v-if="!loggedIn" @log-in="loggedIn = true"/>

    <v-flex v-if="loggedIn && !micError">
      <v-layout justify-center fill-height wrap>
        <recorder
          :blob.sync="blob"
          :defaultState="!blob"
          :micError.sync="micError"
        />
        <cue-card
          :nextDisabled="!blob"
          @update:text="store"
        />
      </v-layout>
    </v-flex>

    <mic-error-dialog :micError="micError" />
  </div>
</template>


<script>
import Login from "./Login.vue"
import Recorder from "./Recorder.vue"
import CueCard from "./CueCard.vue"
import MicErrorDialog from "./MicErrorDialog.vue"

export default {
  name: "Interactive",
  data() {
    return {
      loggedIn: false,
      micError: null,
      blob: "",
      records: []
    };
  },
  components: {
    Login,
    Recorder,
    CueCard,
    MicErrorDialog
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
