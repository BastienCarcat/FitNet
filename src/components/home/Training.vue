<template>
  <div
    v-bind:class="{ borderRed: add, borderBlack: !add }"
    class="card d-flex justify-center align-center"
    elevation="0"
  >
    <div class="text">
      <v-icon v-if="add" color="primary" size="26">mdi-plus</v-icon>
      <div v-else>{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Training",
  props: {
    name: String,
    add: Boolean,
  },
};
</script>

<style scoped>
.card {
  height: 150px;
  width: 150px;
  border-radius: 5%;
}
.borderBlack {
  border: 1px solid var(--v-black-base);
}
.borderRed {
  border: 1px solid var(--v-primary-base);
}
.text {
  padding: 15px;
  text-align: center;
  color: var(--v-primary-base);
}
</style>
