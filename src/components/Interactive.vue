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
import feathers from "@feathersjs/feathers"
import io from "socket.io-client"
import socketio from "@feathersjs/socketio-client"

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
      records: [],
      participantsService: null,
      recordingsService: null
    };
  },
  mounted() {
    let socket = io("http://localhost:3030")
    let client = feathers()
    client.configure(socketio(socket))

    this.participantsService = client.service("participants")
    this.recordingsService = client.service("recordings")
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
