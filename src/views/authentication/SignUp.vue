<template>
  <v-container class="container">
    <div class="position">
      <v-img :src="require('../../assets/logo.png')" class="logo" />
    </div>
    <SignUp />
  </v-container>
</template>

<script>
import SignUp from "@/components/authentication/SignUp";

export default {
  name: "SignUpView",
  components: {
    SignUp,
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
