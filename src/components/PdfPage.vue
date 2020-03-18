<template>
  <div id="pdf-page">

  </div>
</template>

<script>
export default {
  name: "PdfPage",
  props: ["page", "scale"],
  render(create) {
    const { canvasAttrs: attrs } = this
    return create("canvas", { attrs })
  }
}
</script>
