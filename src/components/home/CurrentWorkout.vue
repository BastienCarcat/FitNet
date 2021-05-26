<template>
  <div>
    <v-toolbar flat color="background">
      <v-btn icon>
        <v-icon @click="goBack()">mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ workout.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text color="primary" @click="addWorkout()"> Finish </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <template v-for="exercice in workout.exercices">
        <div class="pt-3" :key="exercice.id">
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
          <!-- <div class="d-flex justify-center pt-5">
            <v-btn outlined color="primary" @click="addSeries(exercice.id)">
              <v-icon left>mdi-plus</v-icon>
              Add series
            </v-btn>
          </div> -->
        </div>
      </template>

      <!-- <div class="d-flex justify-center py-5">
        <v-btn color="primary" @click="switchDialogExercice()">
          <v-icon left>mdi-plus</v-icon>
          Add exercices
        </v-btn>
      </div> -->
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
export default {
  name: "CurrentWorkout",
  data: () => ({
    workout: {
      id: "1",
      name: "Back day",
      exercices: [
        {
          id: "1",
          name: "Rowing",
          muscle: "Back",
          series: [
            {
              id: "1",
              reps: 10,
              Kg: 10,
              rest: "1'30",
            },
          ],
        },
        {
          id: "2",
          name: "Pull up",
          muscle: "Back",
          series: [
            {
              id: "1",
              reps: 10,
              Kg: 10,
              rest: "1'30",
            },
          ],
        },
        {
          id: "3",
          name: "Rowing machine",
          muscle: "Back",
          series: [
            {
              id: "1",
              reps: 10,
              Kg: 10,
              rest: "1'30",
            },
          ],
        },
      ],
    },
  }),
  methods: {
    getWorkout() {
      // axios : find workout (in folders) by idWorkout
      // parce que la pas le temps de le faire sur la fausse donnée de vuex
      // donc je met en dur dans la data
      //   this.$route.params.idWorkout
    },
    goBack() {
      this.$router.push({ name: "Home" });
    },
    finish() {
      //TODO: à faire avec l'API directement parce que je vais devoir tout refaire
      // et ça va être chiant à faire avec vuex
      //FIXME: à voir si pendant le current workout on peut ajouter des exos et des séries
    },
  },
};
</script>
