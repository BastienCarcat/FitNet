<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon @click="switchDialogMore()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <!-- mettre le nom ici -->
      <v-toolbar-title>{{ folder.nameFolder }}</v-toolbar-title>
    </v-toolbar>

    <v-card-text class="d-flex justify-center flex-column">
      <v-btn text color="primary"> Edit </v-btn>
      <v-btn color="primary" @click="deleteFolder">
        <v-icon left>mdi-trash-can</v-icon>
        Delete
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from "lodash";
export default {
  name: "MoreFolder",
  props: {
    idFolder: String,
  },
  methods: {
    switchDialogMore() {
      this.$emit("switchDialogMore");
    },
    deleteFolder() {
      this.$store.dispatch("delFolder", {
        uuidUser: localStorage.getItem("uuidUser"),
        nameFolder: this.folder.nameFolder,
      });
      this.switchDialogMore();
    },
  },
  computed: {
    folder() {
      return _.find(
        this.$store.state.folders,
        (f) => f.uuidFolder === this.idFolder
      );
    },
  },
};
</script>
