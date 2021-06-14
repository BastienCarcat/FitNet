<template>
  <v-app>
    <Header v-show="showHeader" />
    <v-main>
      <router-view />
    </v-main>
    <BottomBar v-show="showBottomBar" />
  </v-app>
</template>

<script>
import BottomBar from "./components/common/BottomBar";
import Header from "./components/common/Header";
export default {
  name: "App",
  components: {
    BottomBar,
    Header,
  },
  computed: {
    showBottomBar() {
      switch (this.$route.name) {
        case "CurrentWorkout":
          return false;
        case "SignIn":
          return false;
        case "SignUp":
          return false;
        default:
          return true;
      }
    },
    showHeader() {
      switch (this.$route.name) {
        case "SignIn":
          return false;
        case "SignUp":
          return false;
        default:
          return true;
      }
    },
  },
};
</script>

<style scoped>
* {
  background-color: var(--v-background-base);
}
</style>
