<template>
  <v-toolbar id="long-nav-bar" app dense dark flat color="grey">
    <router-link to="/" id="home-btn">
      <v-toolbar-title>
        <strong>Stammered Voice</strong>
      </v-toolbar-title>
    </router-link>
    
    <v-spacer />

    <router-link to="/intro">
      <v-btn flat>Intro</v-btn>
    </router-link>

    <router-link to="/instructions">
      <v-btn flat>Guide</v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: "LongNavBar"
}
</script>

<style>
#home-btn {
  color: white;
  text-decoration-line: none;
}
</style>