<template>
  <v-container>
    <div class="text-h4">Exercices :</div>
    <v-text-field
      v-model="search"
      placeholder="Search"
      outlined
      clearable
      dense
      hide-details
      class="pa-5"
    ></v-text-field>
    <v-list class="list" color="background" two-line>
      <template v-for="(exercice, index) in searchExercices">
        <v-divider v-show="index !== 0" :key="index" />
        <v-list-item :key="exercice.id">
          <v-list-item-avatar>
            <v-img src="../../assets/logo.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercice.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ exercice.muscle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <div class="fixed">
      <v-btn color="primary" @click="switchDialogCreate()">
        <v-icon left>mdi-open-in-new</v-icon>
        Create new exercice
      </v-btn>
    </div>
    <v-dialog v-model="dialogCreate" max-width="290">
      <CreateExercice @switchDialogCreate="switchDialogCreate" />
    </v-dialog>
  </v-container>
</template>

<script>
import CreateExercice from "./dialogs/CreateExercice";
export default {
  name: "ExercicesList",
  components: {
    CreateExercice,
  },
  data: () => ({
    exercices: [],
    search: "",
    dialogCreate: false,
  }),
  methods: {
    getExercices() {
      this.exercices = this.$store.state.exercices;
    },
    switchDialogCreate() {
      this.dialogCreate = !this.dialogCreate;
    },
  },
  computed: {
    searchExercices() {
      if (this.search) {
        return this.exercices.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.exercices;
      }
    },
  },
  created() {
    this.getExercices();
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
}
.list {
  overflow-y: auto;
  width: 100%;
  top: 180px;
  bottom: 130px;
  position: fixed;
}
</style>
