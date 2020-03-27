<template>
  <div id="policy">
    <v-layout column align-center fill-height>
      <pdf-viewer :path="path" />
    </v-layout>
  </div>
</template>


<script>
import { mapState } from "vuex"
import PdfViewer from "../components/PdfViewer"

export default {
  name: "Policy",
  data() {
    return {
      path: ""
    }
  },
  components: {
    PdfViewer,
  },
  computed: mapState(["client"]),
  created() {
    this.path = "../assets/pdf/" + this.$route.params.filename
  }
}
</script>
