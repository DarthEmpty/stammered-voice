<template>
  <div id="policy">
    <v-layout column align-center fill-height>
      <pdf-viewer url="https://arxiv.org/pdf/1706.03762.pdf" />
    </v-layout>
  </div>
</template>


<script>
import PdfViewer from "../components/PdfViewer"

export default {
  name: "Policy",
  data() {
    return {
      filePath: ""
    }
  },
  components: {
    PdfViewer
  },
  created() {
    this.filePath = "~/static/" + this.$route.params.filename
  }
}
</script>
