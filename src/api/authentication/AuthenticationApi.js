import { client } from "../client";

const AuthenticationApi = {
  signIn: (email, password) =>
    client.post("/user/signIn/", {
      email: email,
      password: password,
    }),

  signUp: (email, password) =>
    client.post("/user/signUp/", {
      email: email,
      password: password,
    }),
};

export default AuthenticationApi;
