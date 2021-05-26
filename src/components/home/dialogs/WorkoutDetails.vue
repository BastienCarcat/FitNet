<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon @click="switchDialogWorkoutDetails()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ workout.name }}</v-toolbar-title>
    </v-toolbar>
    <v-list two-line>
      <template v-for="exercice in workout.exercices">
        <v-list-item :key="exercice.id">
          <v-list-item-avatar>
            <v-img src="../../../assets/logo.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ exercice.muscle }} : {{ exercice.name }}</v-list-item-title
            >
            <v-list-item-subtitle v-for="set in exercice.series" :key="set.id"
              >{{ set.reps }} x {{ set.Kg }}Kg -
              {{ set.rest }} rest</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-card-actions class="d-flex justify-center pa-3">
      <v-btn color="primary" @click="handleStart">
        <v-icon left>mdi-play</v-icon>
        Start workout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "WorkoutDetails",
  props: {
    idWorkout: String,
  },
  data() {
    return {
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
              {
                id: "2",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
              {
                id: "3",
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
    };
  },
  methods: {
    switchDialogWorkoutDetails() {
      this.$emit("switchDialogWorkoutDetails");
    },
    handleStart: function () {
      // start session here
      this.$router.push({
        name: "CurrentWorkout",
        params: { idWorkout: this.idWorkout },
      });
    },
    // getFoldersExercices() {
    // get all exercices by idWorkout
    // }
  },
  created() {
    this.getFoldersExercices();
  },
};
</script>
