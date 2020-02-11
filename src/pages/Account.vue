<template>
  <div id="account">
    <v-sheet color="accent" class="pa-5">
      <h1 class="headline">{{
        user
        ? "Logged in as " + user.username
        : "Not currently logged in..."
        }}</h1>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Account",
  computed: {
    ...mapState(["user"])
  }
}
</script>