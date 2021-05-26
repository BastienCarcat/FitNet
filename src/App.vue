<template>
  <v-app>
    <Header />
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
      if (this.$route.name === "CurrentWorkout") {
        return false;
      } else {
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
