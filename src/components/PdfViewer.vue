<template>
  <div id="pdf-viewer">
    <v-flex class="mx-5">
        <!-- type="application/pdf" -->
        <!-- :data="url" -->
      <!-- <image
        :src="url"
        :width="$vuetify.breakpoint.width"
        :height="$vuetify.breakpoint.height"
      /> -->
    </v-flex>
  </div>
</template>


<script>
// import range from "lodash.range"
import pdfjs from "pdfjs-dist/webpack"

export default {
  name: "PdfViewer",
  data() {
    return {
      pdf: null,
      pages: [],

    }
  },
  props: ["path"],
  async created() {
    let pdfFile = await import("../assets/pdf/research-participant-privacy-notice.pdf")

    // Decode Base64 string
    let decoded = atob(pdfFile.default.split(",")[1])

    // Convert to Byte Array (recommended by Mozilla)
    let bytes = new Uint8Array(decoded.length)
    for (let i = 0; i < decoded.length; i++) {
      bytes[i] = decoded.charCodeAt(i)
    }

    // Pass raw data to pdfjs
    this.pdf = await pdfjs.getDocument({ data: bytes })
  },
}
</script>