<template>
  <div id="nav-bar">
    <long-nav-bar
      v-if="$vuetify.breakpoint.smAndUp"
      :items="items"
    />

    <short-nav-bar
      v-if="$vuetify.breakpoint.xsOnly"
      :items="items"
    />
  </div>
</template>

<script>
import LongNavBar from "./LongNavBar"
import ShortNavBar from "./ShortNavBar"

export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { name: "Intro", to: "/intro" },
        { name: "Guide", to: "/instructions" }
      ]
    }
  },
  components: {
    LongNavBar,
    ShortNavBar
  }
}
</script>

<style>

</style>