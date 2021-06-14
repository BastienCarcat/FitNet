<template>
  <v-container class="container">
    <div class="position">
      <v-img :src="require('../../assets/logo.png')" class="logo" />
    </div>
    <SignIn />
  </v-container>
</template>

<script>
import SignIn from "@/components/authentication/SignIn";

export default {
  name: "SignInView",
  components: {
    SignIn,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.logo {
  width: 150px;
}
.position {
  margin-top: 100px;
}
</style>
