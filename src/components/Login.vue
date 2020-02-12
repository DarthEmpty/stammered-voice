<template>
  <div id="login">
    <v-flex>
      <v-sheet color="accent" class="pa-4">
        <h2 class="headline my-4">{{ signUp ? "Sign Up" : "Log In" }}</h2>

        <login-form
          :disabled="disabled"
          @submit="decideMethod"
        />

        <v-btn
          large flat
          :disabled="disabled"
          color="primary"
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
    async decideMethod(email, password) {
      if (this.signUp) {
        this.$emit("sign-up", email, password)
      
      } else {
        this.$emit("log-in", email, password)
      }
      
      this.$emit("update:disabled", true)
    }
  }
};
</script>