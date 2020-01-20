<template>
  <div class="recorder">
    <v-flex>
      <v-sheet class="pa-4" color="grey lighten-2" :width="cardWidth">
        <v-btn
          fab depressed
          :loading="loading"
          :disabled="loading"
          @click="toggleRecording"
          class="py-3"
        >
          <v-icon color="red">fas fa-{{ iconState }}</v-icon>
        </v-btn>
    
        <div v-if="showAudio">
          <audio
            id="player" ref="player"
            controls
            :src="blobURL"
          />
        </div>
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
import { RecordRTCPromisesHandler } from "recordrtc";
import { mapActions } from 'vuex';

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
  props: [ "defaultState", "cardWidth" ],
  async mounted() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      let config = { type: "audio" }
      this.recorder = new RecordRTCPromisesHandler(stream, config)
    })
    .catch(err => this.report(err))
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
    ...mapActions([ "report" ]),

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
      try {
        if (this.iconState === "circle") {
          this.startRecording();
          this.iconState = "stop";

        } else {
          this.loading = true;
          await this.stopRecording();
          this.loading = false;
          this.iconState = "circle";
        }
      
      } catch(err) {
        this.report(err)
      }
    }
  }
};
</script>


<style>
  #recorder {
    width: 100%
  }
</style>