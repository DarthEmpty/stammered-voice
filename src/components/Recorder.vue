<template>
  <div class="recorder">
    <v-flex>
      <v-sheet
        class="pa-4"
        height="300"
        width="500"
        color="grey lighten-2"
      >
        <v-layout align-center justify-space-around column fill-height>

          <v-flex shrink>
            <h2>Recording...</h2>
          </v-flex>

          <v-flex grow class="pa-4">
            <v-icon>fas fa-microphone-alt fa-10x</v-icon>
          </v-flex>

          <v-flex shrink>  
            <v-btn fab small
              color="primary"
              :loading="loading"
              :disabled="loading"
              @click="toggleRecording"
            >
              <v-icon color="red">fas fa-{{ iconState }}</v-icon>
            </v-btn>
          </v-flex>

        </v-layout>
        
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from "recordrtc"

export default {
  name: "Recorder",
  data: () => {
    return {
      stream: null,
      recorder: null,
      iconState: "circle",
      loading: false
    }
  },
  mounted: async function() {
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
      invokeSaveAsDialog(blob)
    },

    async toggleRecording() {
      if (this.iconState === "circle") {
        // this.startRecording()
        this.iconState = "stop"
      } else {
        this.loading = true
        // await this.stopRecording()
        
        // dummy code:
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
        await sleep(2000)
        // dummy code end

        this.loading = false
        this.iconState = "circle"
      }
    }
  }
}
</script>