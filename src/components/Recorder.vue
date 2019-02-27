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
            <v-btn fab small color="primary">
              <v-icon color="red">fas fa-circle</v-icon>
            </v-btn>
          </v-flex>

        </v-layout>
        
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from "recordrtc"
import { async } from 'q'

export default {
  name: "Recorder",
  data: () => {
    return {
      recorder: null
    }
  },
  mounted: async function() {
    let stream = navigator.mediaDevices.getUserMedia({audio: true})
    let config = { type: "audio", mimeType: "audio/wav" }

    this.recorder = await new RecordRTCPromisesHandler(stream, config)
  },
  methods: {
    startRecording() {
      this.recorder.startRecording()
    },

    async stopRecording() {
      await this.recorder.stopRecording()
      let blob = await this.recorder.getBlob()
      invokeSaveAsDialog(blob);
    }
  }
}
</script>