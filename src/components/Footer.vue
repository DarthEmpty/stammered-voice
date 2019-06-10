<template>
  <div id="footer">
    <v-footer height="auto">
      <v-card flat tile color="grey" class="flex">
        <v-card-text class="subheading">
          <strong>Thank you for contributing!</strong>
        </v-card-text>
        <v-card-text>
          <v-btn
            v-for="link in links"
            :key="link.icon"
            icon
            :href="link.ref"
          >
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text>
          <v-btn
            small depressed
            color="red"
            @click="seeDataOpen = !seeDataOpen"
          >
            See data
          </v-btn>
          <v-btn
            small depressed
            color="red"
            @click="deleteDataOpen = !deleteDataOpen"
          >
            Delete data
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>

    <see-data-dialog :open="seeDataOpen" />

    <delete-data-dialog :open="deleteDataOpen" />
  </div>
</template>


<script>
import SeeDataDialog from "./SeeDataDialog"
import DeleteDataDialog from "./DeleteDataDialog"

export default {
  name: "Footer",
  data() {
    return {
      links: [
        { icon: "fas fa-at", ref: "mailto: zcvb200@live.rhul.ac.uk" },
        { icon: "fab fa-twitter", ref: "https://twitter.com/NlpJoel" },
        { icon: "fab fa-github", ref: "https://github.com/DarthEmpty" }
      ],
      seeDataOpen: false,
      deleteDataOpen: false,
    };
  },
  components: {
    SeeDataDialog,
    DeleteDataDialog
  }
};
</script>


<style scoped>
#footer {
  flex-shrink: 0;
}
</style>
