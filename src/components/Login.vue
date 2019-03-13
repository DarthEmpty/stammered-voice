<template>
  <div id="login">
    <v-flex>
      <v-sheet color="grey lighten-3" class="pa-4">
        <h2 class="headline my-4"> {{ signUp ? "Sign Up" : "Log In" }} </h2>

        <form>
          <v-text-field
            id="username"
            name="username"
            v-model="username"
            label="Enter your username"
            v-validate="'required|alpha_dash'"
            :error-messages="errors.collect('username')"
            outline
            class="my-2"
          />
          <v-text-field
            id="password"
            name="password"
            v-model="password"
            label="Enter your password"
            v-validate="'required'"
            :error-messages="errors.collect('password')"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            @click:append="show = !show"
            outline
            class="my-2"
          />
          <v-btn
            large depressed
            :disabled="isDisabled"
            color="green" 
            @click="submit"
          >
            Submit
          </v-btn>
          <v-btn
            large flat
            color="green"
            @click="signUp = !signUp"
          >
            {{ toggleText }}
          </v-btn>
        </form>
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
export default {
  $_veeValidate: {
    validator: "new"
  },

  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      show: false,
      signUp: false
    };
  },
  computed: {
    isDisabled() {
      return this.username === "" || this.password === ""
    },
    toggleText() {
      if (this.signUp) {
        return "Back to Log In"
      }

      return "Sign Up instead"
    }
  },
  methods: {
    async submit() {
      let result = await this.$validator.validate()
      if (result) {
        this.$emit("log-in")
      }
    }
  }
};
</script>