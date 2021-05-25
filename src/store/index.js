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
        workouts: [{ id: "1", name: "Curl" }],
      },
      {
        id: "2",
        name: "Back",
        workouts: [
          { id: "1", name: "Rowing" },
          { id: "2", name: "Pull up" },
          { id: "3", name: "Rowing machine" },
        ],
      },
      {
        id: "3",
        name: "Chest",
        workouts: [{ id: "1", name: "Bench press" }],
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
