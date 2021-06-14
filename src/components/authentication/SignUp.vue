<template>
  <v-card class="card" elevation="0" color="background">
    <v-card-title class="pb-8"> Create a new account </v-card-title>
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
        :rules="ruleRequired"
        outlined
        type="password"
        v-model="password"
      />
    </v-card-text>
    <v-card-actions class="actions">
      <v-btn color="primary"> Sign up </v-btn>
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
    mail: "",
    firstName: "",
    lastName: "",
    ruleRequired: [(v) => !!v || "This field is mandatory."],
  }),
  methods: {
    // addUser() {
    //   this.$http
    //     .post("http://localhost:8080/api/user/create", {
    //       mail: this.mail,
    //       lastName: this.lastName,
    //       firstName: this.firstName,
    //       password: this.password
    //     })
    //     .then(response => {
    //       console.log("signup", response);
    //       if (response.status === 200) {
    //         this.$router.push("/SignIn");
    //       }
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
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
