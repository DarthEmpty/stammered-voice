<template>
    <v-toolbar id="nav-bar" app dense dark flat color="grey">
      <router-link to="/" id="home-btn">
        <v-toolbar-title>Stammered Voice</v-toolbar-title>
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
  name: "NavBar"
}
</script>

<style>
#home-btn {
  color: white;
  text-decoration-line: none;
}
</style>