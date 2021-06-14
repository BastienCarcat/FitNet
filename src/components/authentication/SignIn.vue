<template>
  <v-card class="card" elevation="0" color="background">
    <v-card-title class="pb-8"> Sign in to your account </v-card-title>
    <v-form ref="formSignIn">
      <v-card-text>
        <v-text-field
          v-model="mail"
          label="Mail*"
          :rules="ruleRequired"
          outlined
        />
        <v-text-field
          v-model="password"
          type="password"
          label="Password*"
          :rules="ruleRequired"
          outlined
        />
      </v-card-text>
    </v-form>
    <v-card-actions class="actions">
      <v-btn color="primary" @click="signIn"> Sign in </v-btn>
      <v-btn
        class="ma-1"
        color="secondary"
        plain
        @click="$router.push({ name: 'SignUp' })"
      >
        Sign up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    mail: "",
    password: "",
    ruleRequired: [(v) => !!v || "This field is mandatory."],
  }),
  methods: {
    signIn() {
      // this.$refs.formSignIn.validate() -> vérifie si les champs obligatoires sont remplis
      if (this.$refs.formSignIn.validate()) {
        this.$store.dispatch("signIn", {
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
  /* height: 50vh; */
  align-self: stretch;
}
.actions {
  margin-top: 40px;
  justify-content: center;
  flex-direction: column;
}
</style>
