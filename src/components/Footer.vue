<template>
  <div id="footer">
    <v-footer height="auto">
      <v-card flat tile color="accent" class="flex">
        <v-card-text class="caption">
          <router-link to="/policy/privacy">
            <strong>Our Privacy Policy</strong>
          </router-link>
          <div />
          <router-link to="/policy/info">
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

        <v-card-text class="caption">
          <strong xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><span rel="dct:title">Stammered Voice</span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></strong>
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
