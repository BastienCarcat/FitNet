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
      <template v-for="exercice in exercices">
        <div :key="exercice.id">
          <div class="d-flex justify-space-between align-center">
            <div class="text-h5">
              {{ exercice.name }}
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
            v-for="(set, index) in exercice.series"
            :key="set.id"
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
                hide-details
                outlined
                flat
                dense
              />
            </v-col>
            <v-col class="d-flex justify-center align-center px-2 py-0" cols="3"
              ><v-text-field
                type="number"
                :placeholder="set.Kg"
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
                hide-details
                outlined
                flat
                dense
                suffix="sec"
            /></v-col>
          </v-row>
          <div class="d-flex justify-center pt-5">
            <v-btn outlined color="primary" @click="addSeries(exercice.id)">
              <v-icon left>mdi-plus</v-icon>
              Add series
            </v-btn>
          </div>
        </div>
      </template>

      <div class="d-flex justify-center py-5">
        <v-btn color="primary" @click="switchDialogExercice()">
          <v-icon left>mdi-plus</v-icon>
          Add exercices
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
      exercices: [
        {
          id: "1435RTDFV",
          name: "Rowing",
          muscle: "Back",
          series: [
            {
              id: "18765432",
              reps: 0,
              Kg: 0,
              rest: "0",
            },
            {
              id: "187632",
              reps: 0,
              Kg: 0,
              rest: "0",
            },
          ],
        },
      ],
      newSet: {
        reps: 0,
        Kg: 0,
        rest: "0",
      },
    };
  },
  methods: {
    switchDialogExercice() {
      this.dialogExercice = !this.dialogExercice;
    },
    // TODO: faire le delete series et exercice (à voir avec les bug d'id du fixme)
    addSeries(idExercice) {
      // axios : add series on exercice
      // FIXME: bug quand on ajoute une série quand y a deux fois le même exo (même id)
      const index = this.exercices.findIndex(
        (exercice) => exercice.id === idExercice
      );
      this.exercices[index].series.push(this.newSet);
    },
    addWorkout() {
      // axios : add workout in folder
      const idFolder = this.$route.params.idFolder;
      const workout = {
        id: this.$uuid.v4(),
        name: this.name,
        exercices: this.exercices,
      };
      this.$store.commit("newWorkoutInFolder", {
        idFolder: idFolder,
        workout: workout,
      });
      this.goBack();
    },
    setExercices(selectedExercices) {
      selectedExercices.forEach((exercice) => {
        exercice = {
          series: [{ id: this.$uuid.v4(), ...this.newSet }],
          ...exercice,
        };
        this.exercices.push(exercice);
      });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped></style>
