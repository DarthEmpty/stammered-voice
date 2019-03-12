<template>
  <div class="recorder">
    <v-flex>
      <v-sheet class="pa-4" color="grey lighten-2" min-width="450" height="360">
        <v-layout justify-space-around column fill-height>
          <v-flex>
            <h5 class="headline">{{ heading }}</h5>
          </v-flex>

          <v-flex class="ma-4">
            <v-icon>fas fa-microphone-alt fa-10x</v-icon>
          </v-flex>

          <v-flex class="ma-2">
            <v-layout align-center justify-space-between wrap>
              <v-flex>
                <v-btn
                  fab depressed
                  color="primary"
                  :loading="loading"
                  :disabled="loading"
                  @click="toggleRecording"
                >
                  <v-icon color="red">fas fa-{{ iconState }}</v-icon>
                </v-btn>
              </v-flex>
            
              <v-flex v-if="showAudio">
                <audio
                  id="player" ref="player"
                  controls
                  :src="blobURL"
                />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
import { RecordRTCPromisesHandler } from "recordrtc";

export default {
  name: "Recorder",
  data() {
    return {
      recorder: null,
      iconState: "circle",
      loading: false,
      blobURL: ""
    };
  },
  props: [ "defaultState" ],
  async mounted() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      let config = { type: "audio" }
      this.recorder = new RecordRTCPromisesHandler(stream, config)
    })
    .catch(err => {
      this.$emit("update:micError", err)
    })
  },
  computed: {
    showAudio() {
      return !this.defaultState && this.blobURL && this.iconState === "circle"
    },
    heading() {
      if (this.iconState === "stop") {
        return "Recording..."

      } else if (!this.defaultState) {
        return "Listen back to your voice!"

      }

      return "Hit the red button to record yourself."
    }
  },
  methods: {
    startRecording() {
      this.recorder.startRecording();
    },

    emitBase64(blob) {
      let reader = new FileReader();
      reader.onload = () => this.$emit("update:blob", reader.result.split(",")[1]);
      reader.readAsDataURL(blob);
    },

    async stopRecording() {
      await this.recorder.stopRecording();

      let blob = await this.recorder.getBlob();
      this.blobURL = URL.createObjectURL(blob);
      this.emitBase64(blob);
    },

    async toggleRecording() {
      if (this.iconState === "circle") {
        this.startRecording();
        this.iconState = "stop";

      } else {
        this.loading = true;
        await this.stopRecording();
        this.loading = false;
        this.iconState = "circle";
      }
    }
  }
};
</script>