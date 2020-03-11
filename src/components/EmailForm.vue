<template>
  <div id="email-form">
    <form>
      <v-text-field
        id="email"
        name="email"
        v-model="email"
        label="Enter your email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        @keyup.enter="submit"
        outline
        class="my-2"
      />
      <v-btn
        large depressed
        :disabled="email===''"
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

  name: "EmailForm",
  data() {
    return {
      email: ""
    }
  },
  methods: {
    async submit() {
      let result = await this.$validator.validate()
      if (result) {
        this.$emit("submit", this.email)
      }
    }
  }
}
</script>