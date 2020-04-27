<template>
  <div id="pdf-viewer">
    <v-flex>
      <object
        type="application/pdf"
        :width="width"
        :height="$vuetify.breakpoint.height"
        :data="pdfData"
      />
    </v-flex>
  </div>
</template>


<script>
export default {
  name: "PdfViewer",
  props: ["pdfData"],
  computed: {
    width() {
      const vpWidth = this.$vuetify.breakpoint.width
      const breakpoint = this.$vuetify.breakpoint.smAndDown

      return breakpoint ? vpWidth : vpWidth / 2
    }
  }
}
</script>