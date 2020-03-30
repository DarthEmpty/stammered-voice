<template>
  <div id="policy">
    <v-layout column align-center fill-height>
      <pdf-viewer :pdfData="pdfData" />
    </v-layout>
  </div>
</template>


<script>
import PdfViewer from "../components/PdfViewer"
import pdfData from "../assets/pdf/research-participant-privacy-notice.pdf"

export default {
  name: "Policy",
  data() {
    return {
      pdfData
    }
  },
  components: {
    PdfViewer,
  }
}
</script>
