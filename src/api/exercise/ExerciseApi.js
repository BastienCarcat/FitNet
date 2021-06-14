import { client } from "../client";

const ExerciseApi = {
  get: (uuidUser) => client.get(`/exercise/recover/${uuidUser}`),

  post: (uuidUser, nameExercise) =>
    client.post("/exercise/create/", {
      uuidUser: uuidUser,
      nameExercise: nameExercise,
    }),
  //TODO: error "empty fields"
  del: (uuidUser, nameExercise) =>
    client.delete(`/exercise/delete/${uuidUser}/${nameExercise}`),
};

export default ExerciseApi;
