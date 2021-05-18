<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <BottomBar />
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
};
</script>

<style scoped>
* {
  background-color: #f4f4f4;
}
</style>
