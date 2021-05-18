<template>
  <v-app-bar color="white" app class="center" elevation="2">
    <v-img
      :src="require('../../assets/logo.png')"
      max-height="50"
      max-width="50"
    />
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
