<template>
  <div id="pdf-viewer">
    <pdf-page
      v-for="page in pages"
      :key="page"
      :page="page"
      :scale="scale"
    />
  </div>
</template>


<script>
import PdfPage from "./PdfPage"

import pdfjs from "pdfjs-dist/webpack"
import range from "lodash.range"

export default {
  name: "PdfViewer",
  data() {
    return {
      pdf: null,
      pages: []
    }
  },
  props: ["url", "scale"],
  components: [
    PdfPage
  ],
  async created() {
    this.pdf = await pdfjs.getDocument(this.url)

    const pages = range(1, this.pdf.numPages).map(
      number => this.pdf.getPage(number)
    )

    this.pages = await Promise.all(pages)
  },
}
</script>