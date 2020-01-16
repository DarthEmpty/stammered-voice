<template>
  <div id="nav-bar">
    <long-nav-bar
      v-if="$vuetify.breakpoint.smAndUp"
    />

    <short-nav-bar
      v-if="$vuetify.breakpoint.xsOnly"
    />
  </div>
</template>

<script>
import LongNavBar from "./LongNavBar"
import ShortNavBar from "./ShortNavBar"

export default {
  name: "NavBar",
  components: {
    LongNavBar,
    ShortNavBar
  }
}
</script>

<style>

</style>