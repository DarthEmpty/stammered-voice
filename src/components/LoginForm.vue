<template>
  <div id="login-form">
    <form>
      <v-text-field
        id="username"
        name="username"
        v-model="username"
        label="Enter your username"
        v-validate="'required|alpha_dash'"
        :error-messages="errors.collect('username')"
        @keyup.enter="submit"
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
        @keyup.enter="submit"
        outline
        class="my-2"
      />
      <v-btn
        large depressed
        :disabled="disabled || fieldsUnfilled"
        :loading="disabled"
        color="primary" 
        @click="submit"
      >
        Submit
      </v-btn>
    </form>
  </div>  
</template>


<script>
export default {
  $_veeValidate: {
    validator: "new"
  },

  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      show: false
    };
  },
  props: [ "disabled" ],
  computed: {
    fieldsUnfilled() {
      return this.username === "" || this.password === ""
    }
  },
  methods: {
    async submit() {
      let result = await this.$validator.validate()
      if (result) {
        this.$emit("submit", this.username, this.password)
        this.buttonsDisabled = true
      }
    }
  }
}
</script>
