<template>
  <div>
    <v-toolbar flat color="background">
      <v-btn icon>
        <v-icon @click="goBack()">mdi-close</v-icon>
      </v-btn>
      <v-text-field
        v-model="name"
        hide-details
        dense
        solo
        class="pl-3"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text color="primary" @click="addWorkout()"> Save </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <template v-for="(exercise, indexExercise) in exercises">
        <div class="pt-3" :key="exercise.uuidExercise">
          <div class="d-flex justify-space-between align-center">
            <div class="text-h5">
              {{ exercise.nameExercise }}
            </div>

            <v-btn icon>
              <v-icon color="primary">mdi-trash-can</v-icon>
            </v-btn>
          </div>
          <v-row class="pt-3 pr-2" justify="end">
            <v-col class="d-flex justify-center" cols="3">
              <div>Series</div>
            </v-col>
            <v-col class="d-flex justify-center" cols="3">
              <div>Reps</div>
            </v-col>
            <v-col class="d-flex justify-center" cols="3">
              <div>Kg</div>
            </v-col>
            <v-col class="d-flex justify-center" cols="3">
              <div>Rest</div>
            </v-col>
          </v-row>
          <v-row
            class="pr-2"
            v-for="(set, index) in exercise.series"
            :key="index"
          >
            <v-col class="d-flex justify-center" cols="3">{{
              index + 1
            }}</v-col>
            <v-col
              class="d-flex justify-center align-center px-2 py-0"
              cols="3"
            >
              <v-text-field
                type="number"
                :placeholder="set.reps"
                v-model="set.reps"
                hide-details
                outlined
                flat
                dense
              />
            </v-col>
            <v-col class="d-flex justify-center align-center px-2 py-0" cols="3"
              ><v-text-field
                type="number"
                :placeholder="set.weight"
                v-model="set.weight"
                hide-details
                outlined
                flat
                dense
                suffix="Kg"
            /></v-col>
            <v-col class="d-flex justify-center align-center px-2 py-0" cols="3"
              ><v-text-field
                type="number"
                :placeholder="set.rest"
                v-model="set.rest"
                hide-details
                outlined
                flat
                dense
                suffix="sec"
            /></v-col>
          </v-row>
          <div class="d-flex justify-center pt-5">
            <v-btn outlined color="primary" @click="addSeries(indexExercise)">
              <v-icon left>mdi-plus</v-icon>
              Add series
            </v-btn>
          </div>
        </div>
      </template>

      <div class="d-flex justify-center py-5">
        <v-btn color="primary" @click="switchDialogExercice()">
          <v-icon left>mdi-plus</v-icon>
          Add exercises
        </v-btn>
      </div>
    </v-container>
    <v-dialog v-model="dialogExercice" max-width="290">
      <ExerciceList
        @setExercices="setExercices"
        @switchDialogExercice="switchDialogExercice"
      />
    </v-dialog>
  </div>
</template>

<script>
import ExerciceList from "./dialogs/ExercicesList";
export default {
  name: "CreateWorkout",
  components: {
    ExerciceList,
  },
  data() {
    return {
      name: "New workout",
      dialogExercice: false,
      exercises: [],
      newSet: {
        reps: "0",
        weight: "0",
        rest: "0",
      },
    };
  },
  methods: {
    switchDialogExercice() {
      this.dialogExercice = !this.dialogExercice;
    },
    // TODO: faire le delete series et exercice (à voir avec les bug d'id du fixme)
    addSeries(indexExercise) {
      this.exercises[indexExercise].series.push({ ...this.newSet });
    },
    addWorkout() {
      this.$store.dispatch("postWorkout", {
        uuidUser: localStorage.getItem("uuidUser"),
        uuidFolder: this.$route.params.idFolder,
        nameWorkout: this.name,
        exercises: this.exercises,
      });
      this.goBack();
    },
    // fonction appelée depuis la modale pour ajouter les nouveaux exercices
    setExercices(selectedExercises) {
      selectedExercises.forEach((exercise) => {
        exercise = {
          series: [
            {
              ...this.newSet,
            },
          ],
          ...exercise,
        };
        this.exercises.push(exercise);
      });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped></style>
