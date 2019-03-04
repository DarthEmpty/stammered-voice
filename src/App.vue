<template>
  <div id="app">
    <v-container>
      <v-layout align-center justify-start column>
        <intro />

        <v-flex>
          <v-layout align-center justify-space-between fill-height wrap>
            <recorder />
            <cue-card />
          </v-layout>
        </v-flex>
      </v-layout>      
    </v-container>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue"
import Recorder from "./components/Recorder.vue"
import CueCard from "./components/CueCard.vue"

export default {
  name: 'app',
  components: {
    Intro,
    Recorder,
    CueCard
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
