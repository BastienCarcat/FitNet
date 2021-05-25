<template>
  <div>
    <Motivation />
    <FoldersList />
  </div>
</template>

<script>
import Motivation from "../../components/home/Motivation";
import FoldersList from "../../components/home/FoldersList";
export default {
  name: "HomeTab",
  components: {
    Motivation,
    FoldersList,
  },
};
</script>

<style scoped></style>
