<template>
  <div id="app">
    <v-app>
      <nav-bar/>

      <v-content>
        <v-container id="main-container">
          <v-layout align-center justify-start column>
            <!-- <intro/> -->
            <interactive/>
          </v-layout>
        </v-container>
      </v-content>
      
      <Footer/>

      <v-snackbar
        v-model="openSnackbar"
      >
        {{ message }}

        <v-btn
          flat color="primary"
          @click.native="openSnackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

    </v-app>
  </div>
</template>


<script>
import NavBar from "./components/NavBar.vue";
import Intro from "./components/Intro.vue";
import Interactive from "./components/Interactive.vue";
import Footer from "./components/Footer.vue";
import { mapState } from 'vuex';

export default {
  name: "app",
  data() {
    return {
      openSnackbar: false
    }
  },
  components: {
    NavBar,
    Intro,
    Interactive,
    Footer
  },
  mounted() {
    this.$store.watch(
      (state, getters) => state.errorMessage,
      (newValue, oldValue) => this.openSnackbar = true
    )
  },
  computed: mapState({ message: "errorMessage" })
};
</script>


<style>
html, body, #app { height: 100%; }

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
}

#main-container {
  flex: 1 0 auto;
}
</style>
