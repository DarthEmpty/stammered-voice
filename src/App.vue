<template>
  <div id="app">
    <v-app>
      <v-container id="main-container">
        <v-layout align-center justify-start column>
          <intro/>
          <interactive/>
        </v-layout>
      </v-container>
      <Footer/>
    </v-app>
  </div>
</template>


<script>
import Intro from "./components/Intro.vue";
import Interactive from "./components/Interactive.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Intro,
    Interactive,
    Footer
  }
};
</script>


<style>
html, body, #app { height: 100%; }

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#main-container {
  flex: 1 0 auto;
}
</style>
