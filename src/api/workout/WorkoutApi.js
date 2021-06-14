import { client } from "../client";

const WorkoutApi = {
  getWorkout: (uuidUser) => client.get(`/workout/recover/${uuidUser}`),

  getDetails: (uuidWorkout) =>
    client.get(`/workoutExercise/recover/${uuidWorkout}`),

  post: (uuidUser, uuidFolder, nameWorkout, exercises) =>
    client.post("/workout/create/", {
      uuidUser: uuidUser,
      uuidFolder: uuidFolder,
      nameWorkout: nameWorkout,
      exercise: exercises,
    }),
};

export default WorkoutApi;
