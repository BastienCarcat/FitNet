<template>
  <v-container>
    <div class="text-h4">Exercises :</div>
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
      <template v-for="(exercise, index) in searchExercises">
        <v-divider v-show="index !== 0" :key="index" />
        <v-list-item :key="exercise.uuidExercise">
          <v-list-item-avatar>
            <v-img src="../../assets/logo.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercise.nameExercise }}</v-list-item-title>
            <!-- <v-list-item-subtitle>{{ exercise.muscle }}</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <div class="fixed">
      <v-btn color="primary" @click="switchDialogCreate()">
        <v-icon left>mdi-open-in-new</v-icon>
        Create new exercise
      </v-btn>
    </div>
    <v-dialog v-model="dialogCreate" max-width="290">
      <CreateExercice @switchDialogCreate="switchDialogCreate" />
    </v-dialog>
  </v-container>
</template>
//TODO: delete exercise
<script>
import CreateExercice from "./dialogs/CreateExercice";
import { mapState } from "vuex";
export default {
  name: "ExercicesList",
  components: {
    CreateExercice,
  },
  data: () => ({
    search: "",
    dialogCreate: false,
  }),
  methods: {
    switchDialogCreate() {
      this.dialogCreate = !this.dialogCreate;
    },
  },
  computed: {
    searchExercises() {
      if (this.search) {
        return this.exercises.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.nameExercise.toLowerCase().includes(v));
        });
      } else {
        return this.exercises;
      }
    },
    ...mapState(["exercises"]),
  },
  mounted() {
    this.$store.dispatch("getExercises", {
      uuidUser: localStorage.getItem("uuidUser"),
    });
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
