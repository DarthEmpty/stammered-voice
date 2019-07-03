<template>
  <div id="login">
    <v-flex>
      <v-sheet color="grey lighten-3" class="pa-4">
        <h2 class="headline my-4"> {{ signUp ? "Sign Up" : "Log In" }} </h2>

        <login-form
          :disabled="disabled"
          @submit="decideMethod"
        />

        <v-btn
          large flat
          :disabled="disabled"
          color="green"
          @click="signUp = !signUp"
        >
          {{ toggleText }}
        </v-btn>
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
import LoginForm from "./LoginForm"

export default {
  name: "Login",
  data() {
    return {
      signUp: false
    };
  },
  props: [ "disabled" ],
  components: {
    LoginForm
  },
  computed: {
    toggleText() {
      return this.signUp ? "Back to Log In" : "Sign Up instead"
    }
  },
  methods: {
    async decideMethod(username, password) {
      if (this.signUp) {
        this.$emit("sign-up", username, password)
      
      } else {
        this.$emit("log-in", username, password)
      }
      
      this.$emit("update:disabled", true)
    }
  }
};
</script>