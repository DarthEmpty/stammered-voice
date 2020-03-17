<template>
  <div id="verify">
    <v-flex py-5>
      <h1 class="headline">{{ contents[contentIndex] }}</h1>
    </v-flex>

    <v-flex>
      <router-link to="/">
        <v-btn color="primary">Back to Home</v-btn>
      </router-link>
    </v-flex>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Verify",
  data() {
    return {
      contentIndex: 0,
      contents: [
        "One Moment, Please...",
        "Cool, You're All Set!",
        "Something's Not Right..."
      ]
    }
  },
  computed: mapState(["authManagement"]),
  methods: mapActions(["report"]),
  async created() {
    const token = this.$route.query.token

    try {
      await this.authManagement.verifySignupLong(token)     
      this.contentIndex = 1
    } catch (error) {
      this.contentIndex = 2
      this.report(error)
    }
  }
}
</script>