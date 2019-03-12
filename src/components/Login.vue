<template>
  <div id="login">
    <v-flex>
      <v-sheet color="grey lighten-3" class="pa-4">
        <form>
          <v-text-field
            id="username"
            name="username"
            label="Enter your username"
            outline
          />
          <v-text-field
            id="password"
            name="password"
            label="Enter your password"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            @click:append="show = !show"
            outline
          />
          <v-btn large depressed color="green" @click="submit">Submit</v-btn>
        </form>
      </v-sheet>
    </v-flex>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      show: false
    }
  },
  methods: {
    submit() {
      this.$emit("log-in");
    }
  }
}
</script>