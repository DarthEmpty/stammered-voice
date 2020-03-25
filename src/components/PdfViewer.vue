<template>
  <div id="pdf-viewer">
    <v-flex class="mx-5">
      <object
        :data="url"
        :width="$vuetify.breakpoint.width"
        :height="$vuetify.breakpoint.height"
      />
    </v-flex>
  </div>
</template>


<script>
export default {
  name: "PdfViewer",
  props: ["url"]
}
</script>