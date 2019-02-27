<template>
  <div class="recorder">
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