<template>
  <div id="short-nav-bar">
    <v-toolbar app dense dark flat color="grey">
      <v-btn icon @click="open = !open">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>

      <router-link to="/" id="home-btn">
        <v-toolbar-title>
          <strong>Stammered Voice</strong>
        </v-toolbar-title>
      </router-link>
    </v-toolbar>

    <v-navigation-drawer 
      app absolute temporary
      v-model="open"
    >
      <!-- TODO: Add list of links using for loop -->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "ShortNavBar",
  data: () => {
    return {
      open: false
    }
  }
}
</script>

<style>

</style>