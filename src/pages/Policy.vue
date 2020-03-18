<template>
  <div id="policy">
    <pdf-viewer url="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf" :scale=scale />
  </div>
</template>


<script>
import PdfViewer from "../components/PdfViewer"

export default {
  name: "Policy",
  data() {
    return {
      filePath: "",
      scale: 2
    }
  },
  components: [
    PdfViewer
  ],
  created() {
    this.filePath = "~/static/" + this.$route.params.filename
  }
}
</script>
