import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folders: [
      {
        id: "1",
        name: "Arms",
        workouts: [
          {
            id: "1",
            name: "Arms day",
            exercices: [
              {
                id: "1",
                name: "Curl",
                muscle: "Arms",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Back",
        workouts: [
          {
            id: "1",
            name: "Back day",
            exercices: [
              {
                id: "1",
                name: "Rowing",
                muscle: "Back",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
              {
                id: "2",
                name: "Pull up",
                muscle: "Back",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
              {
                id: "3",
                name: "Rowing machine",
                muscle: "Back",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
            ],
          },
          {
            id: "23",
            name: "Back day half",
            exercices: [
              {
                id: "1",
                name: "Rowing",
                muscle: "Back",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
              {
                id: "2",
                name: "Pull up",
                muscle: "Back",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
              {
                id: "3",
                name: "Rowing machine",
                muscle: "Back",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        name: "Chest",
        workouts: [
          {
            id: "1",
            name: "Chest day split",
            exercices: [
              {
                id: "1",
                name: "Bench press",
                muscle: "Chest",
                reps: 10,
                Kg: 10,
                rest: "1'30",
              },
            ],
          },
        ],
      },
    ],
  },
  mutations: {
    newFolder(state, payload) {
      console.log(payload);
      const newFolder = { id: uuid.v4(), name: payload, wrokouts: [] };
      state.folders.push(newFolder);
    },
  },
  actions: {},
  modules: {},
});
