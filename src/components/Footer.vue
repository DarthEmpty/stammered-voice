<template>
  <div id="footer">
    <v-footer height="auto">
      <v-card flat tile color="accent" class="flex">
        <v-card-text class="caption">
          <router-link to="/policy/privacy">
            <strong>Our Privacy Policy</strong>
          </router-link>
          <div />
          <router-link to="/policy/participant-info">
            <strong>Information for Participants</strong>
          </router-link>
        </v-card-text>
        <v-card-text>
          <v-tooltip 
            v-for="link in links"
            :key="link.tip"
            top
            open-delay="100"
            close-delay="100"
          >
            <template v-slot:activator="{ on }">
              <v-btn icon :href="link.ref" v-on="on">
                <v-icon>{{ link.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ link.tip }}</span>
          </v-tooltip>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        { icon: "fas fa-at", ref: "mailto: zcvb200@live.rhul.ac.uk", tip: "Email" },
        { icon: "fab fa-twitter", ref: "https://twitter.com/NlpJoel", tip: "Twitter" },
        { icon: "fab fa-github", ref: "https://github.com/DarthEmpty", tip: "Github" }
      ]
    };
  }
};
</script>


<style scoped>
#footer {
  flex-shrink: 0;
}
</style>
