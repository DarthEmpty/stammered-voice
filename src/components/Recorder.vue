<template>
  <div class="recorder">
    <v-flex>
      <v-sheet
        class="pa-4"
        color="grey lighten-2"
      >
        <v-layout justify-space-around column fill-height>

          <v-flex class="pa-2">
            <h2>Recording...</h2>
          </v-flex>

          <v-flex class="pa-4">
            <v-icon>fas fa-microphone-alt fa-10x</v-icon>
          </v-flex>

          <v-flex class="pa-2">
            <v-layout align-center justify-space-between>
              <v-flex>  
                <v-btn fab depressed
                  color="primary"
                  :loading="loading"
                  :disabled="loading"
                  @click="toggleRecording"
                >
                  <v-icon color="red">fas fa-{{ iconState }}</v-icon>
                </v-btn>
              </v-flex>

              <v-flex>
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
import { RecordRTCPromisesHandler } from "recordrtc"

export default {
  name: "Recorder",
  data() {
    return {
      recorder: null,
      iconState: "circle",
      loading: false,
      blobURL: ""
    }
  },
  async mounted() {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    let config = { type: "audio" }

    this.recorder = new RecordRTCPromisesHandler(stream, config)
  },
  methods: {
    startRecording() {
      this.recorder.startRecording()
    },

    async stopRecording() {
      await this.recorder.stopRecording()
      let blob = await this.recorder.getBlob()
      this.blobURL = URL.createObjectURL(blob)
    },

    async toggleRecording() {
      if (this.iconState === "circle") {
        this.startRecording()
        this.iconState = "stop"

      } else {
        this.loading = true
        await this.stopRecording()
        this.loading = false
        this.iconState = "circle"
      }
    }
  }
}
</script>