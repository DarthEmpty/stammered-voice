<template>
  <div id="see-data-dialog">
    <v-dialog
      v-model="open"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">See Personal Data</h3>
        </v-card-title>
        <v-card-text>
          Enter your credentials into the form below to download all of the data you've participated.

          <login-form @submit="onSubmit" />

        </v-card-text>
        <v-card-actions>
          <v-btn flat color="red" @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import LoginForm from "./LoginForm"
import { mapActions, mapGetters } from 'vuex'
import JSZip from "jszip"
import { saveAs } from "file-saver"

export default {
  name: "SeeDataDialog",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  props: [ "open" ],
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters(["recordings"])
  },
  methods: {
    ...mapActions(["authenticateUser"]),

    close() {
      this.$emit('close')
    },

    async onSubmit(username, password) {
      let user = await this.authenticateUser({ username, password })

      if (user) {
        // Retrieve files
        let results = await this.recordings.find({ query: { participantId: user.id } })
        
        // Decode and convert into Audio objects
        let sounds = results.data.map(
          entity => {
            let byteChars = atob(entity.sound)
            let bytes = new Array(byteChars.length)
            for(let i = 0; i < byteChars.length; i++) {
              bytes[i] = byteChars.charCodeAt(i)
            }

            return new Blob([new Uint8Array(bytes)], { type: "audio/wav" })
          }
        )

        // Store in zip file
        let zip = new JSZip()
        for (let i = 0; i < sounds.length; i++) {
          zip.file("recording" + i.toString() + ".wav", sounds[i])
        }

        // Save zip file
        let file = await zip.generateAsync({ type:"blob" })
        saveAs(file, "recordings.zip")
      }

      this.close()
    }
  }
}
</script>
