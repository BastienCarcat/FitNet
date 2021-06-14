<template>
  <v-card class="card" elevation="0" color="background">
    <v-card-title class="pb-8"> Create a new account </v-card-title>
    <v-form ref="formSignUp">
      <v-card-text>
        <v-text-field
          label="Mail*"
          :rules="ruleRequired"
          outlined
          v-model="mail"
        />
        <v-text-field
          label="Password*"
          :rules="ruleRequired"
          outlined
          type="password"
          v-model="password"
        />
        <v-text-field
          label="Confirm password*"
          :rules="[
            (value) => !!value || 'This field is mandatory.',
            (value) =>
              value === this.password ||
              'The password confirmation does not match.',
          ]"
          outlined
          type="password"
          v-model="confirmPassword"
        />
      </v-card-text>
    </v-form>
    <v-card-actions class="actions">
      <v-btn color="primary" @click="signUp"> Sign up </v-btn>
      <v-btn
        class="ma-1"
        color="secondary"
        plain
        @click="$router.push({ name: 'SignIn' })"
      >
        Sign in
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    password: "",
    confirmPassword: "",
    mail: "",
    ruleRequired: [(v) => !!v || "This field is mandatory."],
  }),
  methods: {
    signUp() {
      // this.$refs.formSignUp.validate() -> vérifie si les champs obligatoires sont remplis
      if (this.$refs.formSignUp.validate()) {
        this.$store.dispatch("signUp", {
          email: this.mail,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  align-self: stretch;
}
.actions {
  margin-top: 40px;
  justify-content: center;
  flex-direction: column;
}
</style>
