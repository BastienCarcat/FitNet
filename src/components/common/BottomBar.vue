<template>
  <v-bottom-navigation v-model="value" app color="primary" grow>
    <v-btn value="exercices" @click="$router.push({ name: 'Exercices' })">
      <span>Exercices</span>

      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>
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
      switch (this.$route.name) {
        case "Home":
          this.value = "home";
          break;
        case "Exercices":
          this.value = "exercices";
          break;
        default:
          break;
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
