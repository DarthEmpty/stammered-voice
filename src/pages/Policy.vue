<template>
  <div id="policy">
    <v-layout column align-center fill-height>
      <pdf-viewer :pdfData="pdfData" />
    </v-layout>
  </div>
</template>


<script>
import PdfViewer from "../components/PdfViewer"
import privacy from "../assets/pdf/research-participant-privacy-notice.pdf"
import info from "../assets/pdf/research-participant-info.pdf"

export default {
  name: "Policy",
  props: [ "file" ],
  components: {
    PdfViewer,
  },
  computed: {
    pdfData() {
      switch (this.$route.params.file) {
        case "privacy":
          return privacy;
        case "participant-info":
          return info;
        default:
          return null;
      }
    }
  }
}
</script>
