<template>
  <v-card>
    <v-toolbar class="d-flex" flat>
      <v-btn icon @click="handleCloseMore()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <!-- mettre le nom ici -->
      <v-toolbar-title class="justify-self-center">{{
        idFolder
      }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="d-flex justify-center flex-column">
      <v-btn text color="primary"> Edit </v-btn>
      <v-btn tile color="primary">
        <v-icon left>mdi-trash-can</v-icon>
        Delete
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MoreFolder",
  props: {
    idFolder: String,
  },
  methods: {
    handleCloseMore() {
      this.$emit("handleCloseMore");
    },
    handleAdd: function () {
      if (this.$refs.formAddFolder.validate()) {
        this.$store.commit("newFolder", this.name);
        this.handleClose();
      }
    },
  },
};
</script>
