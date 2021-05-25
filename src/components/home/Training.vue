<template>
  <div class="card d-flex justify-center align-center" elevation="0">
    <div class="text">
      {{ add ? "Press to add a new workout" : name }}
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
  border: 1px solid #1e201e;
  border-radius: 5%;
}
.text {
  padding: 15px;
  text-align: center;
  color: #ca0202;
}
</style>
