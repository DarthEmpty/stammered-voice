<template>
  <div id="pdf-viewer">
    <v-flex>
      <object
        type="application/pdf"
        :width="$vuetify.breakpoint.width / 2"
        :height="$vuetify.breakpoint.height"
        :data="pdfData"
      />
    </v-flex>
  </div>
</template>


<script>
export default {
  name: "PdfViewer",
  props: ["pdfData"]
}
</script>