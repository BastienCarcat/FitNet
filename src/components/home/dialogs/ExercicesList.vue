<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon @click="switchDialogExercice">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text color="primary" @click="addExercices()"> Save </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-text-field
      v-model="search"
      placeholder="Search"
      outlined
      clearable
      dense
      hide-details
      class="px-5 pb-3"
    ></v-text-field>
    <v-list max-height="300" class="overflow" two-line>
      <v-list-item-group multiple v-model="selected" color="primary">
        <template v-for="exercise in searchExercises">
          <v-list-item :value="exercise" :key="exercise.uuidExercise">
            <v-list-item-avatar>
              <v-img src="../../../assets/logo.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ exercise.nameExercise }}</v-list-item-title>
              <!-- <v-list-item-subtitle>{{ exercise.muscle }}</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-card-actions class="d-flex justify-center pa-3">
      <v-btn color="primary" @click="switchDialogCreate()">
        <v-icon left>mdi-open-in-new</v-icon>
        Create new exercice
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialogCreate" max-width="290">
      <CreateExercice @switchDialogCreate="switchDialogCreate" />
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import CreateExercice from "../../exercices/dialogs/CreateExercice";
export default {
  name: "ExerciceList",
  components: {
    CreateExercice,
  },
  data: () => ({
    search: "",
    selected: [],
    dialogCreate: false,
  }),
  methods: {
    switchDialogCreate() {
      this.dialogCreate = !this.dialogCreate;
    },
    switchDialogExercice() {
      this.$emit("switchDialogExercice");
    },
    addExercices() {
      this.$emit("setExercices", this.selected);
      this.switchDialogExercice();
      this.selected = [];
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
.overflow {
  overflow-y: auto;
}
</style>
