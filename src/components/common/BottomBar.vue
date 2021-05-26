<template>
  <v-bottom-navigation
    background-color="white"
    v-model="value"
    app
    color="primary"
    grow
  >
    <v-btn value="home" @click="$router.push({ name: 'Home' })">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomBar",
  data: () => ({ value: "home" }),
  methods: {
    getCurrentRoute() {
      if (this.$route.name === "Home") {
        this.value = "home";
      }
    },
  },
  created() {
    this.getCurrentRoute();
  },
  watch: {
    $route() {
      this.getCurrentRoute();
    },
  },
};
</script>
