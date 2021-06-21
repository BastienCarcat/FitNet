import Vue from "vue";
import Vuex from "vuex";
import { Api } from "@/api";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("user"),
    folders: [],
    exercises: [],
    workouts: [],
    workoutDetails: [],
    // muscles: ["Arms", "Chest", "Back", "Shoulders", "Abs", "Legs"],
  },
  // les mutations sont obligatoirement synchrone et servent à changer le state
  mutations: {
    GET_FOLDERS(state, folders) {
      state.folders = folders;
    },
    POST_FOLDER(state, folder) {
      state.folders.push(folder);
    },
    SET_IS_LOGGED_IN(state) {
      state.isLoggedIn = true;
    },
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
    SET_WORKOUTS(state, workouts) {
      state.workouts = workouts;
    },
    SET_WORKOUTS_DETAILS(state, workoutDetails) {
      state.workoutDetails = workoutDetails;
    },
  },
  // Exécute les requêtes API dans l'action car le code est asynchrone ici
  // puis doit commit une mutation pour l'exécuter et changer le state
  // pour exécuter une action, il faut la dispatch
  actions: {
    async getFolders({ commit }, payload) {
      try {
        const response = await Api.FolderApi.get(payload.uuidUser);
        commit("GET_FOLDERS", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async postFolder({ commit }, payload) {
      try {
        const response = await Api.FolderApi.post(
          payload.uuidUser,
          payload.nameFolder
        );
        commit("POST_FOLDER", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async delFolder({ dispatch }, payload) {
      try {
        await Api.FolderApi.del(payload.uuidUser, payload.nameFolder);
        dispatch("getFolders", { uuidUser: payload.uuidUser });
      } catch (err) {
        console.error(err);
      }
    },
    async signIn({ commit }, payload) {
      try {
        const response = await Api.AuthenticationApi.signIn(
          payload.email,
          payload.password
        );
        commit("SET_IS_LOGGED_IN");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("uuidUser", response.data.uuidUser);
        router.push({ name: "Home" });
      } catch (err) {
        console.error(err);
      }
    },
    async signUp(_, payload) {
      try {
        await Api.AuthenticationApi.signUp(payload.email, payload.password);
        router.push({ name: "SignIn" });
      } catch (err) {
        console.error(err);
      }
    },
    async getExercises({ commit }, payload) {
      try {
        const response = await Api.ExerciseApi.get(payload.uuidUser);
        commit("SET_EXERCISES", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async postExercise({ dispatch }, payload) {
      try {
        await Api.ExerciseApi.post(payload.uuidUser, payload.nameExercise);
        dispatch("getExercises", { uuidUser: payload.uuidUser });
      } catch (err) {
        console.error(err);
      }
    },
    async delExercise({ dispatch }, payload) {
      try {
        await Api.ExerciseApi.del(payload.uuidUser, payload.nameExercise);
        dispatch("getExercises", { uuidUser: payload.uuidUser });
      } catch (err) {
        console.error(err);
      }
    },
    async postWorkout({ dispatch }, payload) {
      try {
        await Api.WorkoutApi.post(
          payload.uuidUser,
          payload.uuidFolder,
          payload.nameWorkout,
          payload.exercises
        );
        dispatch("getWorkouts", { uuidUser: payload.uuidUser });
      } catch (err) {
        console.error(err);
      }
    },
    async getWorkouts({ commit }, payload) {
      try {
        const response = await Api.WorkoutApi.getWorkout(payload.uuidUser);
        commit("SET_WORKOUTS", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async getDetails({ commit }, payload) {
      try {
        const response = await Api.WorkoutApi.getWorkout(payload.uuidWorkout);
        commit("SET_WORKOUTS_DETAILS", response.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {},
});
