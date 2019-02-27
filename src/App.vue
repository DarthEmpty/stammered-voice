<template>
  <div id="app">
    <intro />
    <recorder />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue"
import Recorder from "./components/Recorder.vue"

export default {
  name: 'app',
  components: {
    Intro,
    Recorder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
