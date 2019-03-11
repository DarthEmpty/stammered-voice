<template>
  <div id="app">
    <v-container>
      <v-layout align-center justify-start column>
        <intro />
        <interactive />
      </v-layout>      
    </v-container>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue"
import Interactive from "./components/Interactive.vue"

export default {
  name: 'app',
  components: {
    Intro,
    Interactive,
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
