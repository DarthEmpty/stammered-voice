<template>
  <v-toolbar id="long-nav-bar" app dense dark flat color="grey">
    <v-toolbar-title>
      <strong>Stammered Voice</strong>
    </v-toolbar-title>
    
    <v-spacer />

    <router-link
      v-for="item in items"
      :key="item.name"
      :to="item.to"
    >
      <v-btn flat>{{ item.name }}</v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: "LongNavBar",
  props: [ "items" ]
}
</script>

<style>
#home-btn {
  color: white;
  text-decoration-line: none;
}
</style>