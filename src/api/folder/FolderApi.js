import { client } from "../client";

const FolderApi = {
  get: (uuidUser) =>
    client
      .get(`/folder/recover/${uuidUser}`)
      .then((response) => {
        this.$store.commit("SET_FOLDERS", response.data);
      })
      .catch((err) => err),

  post: (uuidUser, nameFolder) =>
    client
      .get("/folder/create/", {
        data: {
          uuidUser,
          nameFolder,
        },
      })
      .then(() => {
        this.$store.dispatch(
          "getFolders",
          "8aaaa550-a7f6-4a14-886f-1dad8d742a2d"
        );
      })
      .catch((err) => err),
  del: (uuidUser, nameFolder) =>
    client
      .get("/folder/delete/", {
        data: {
          uuidUser,
          nameFolder,
        },
      })
      .then(() => {
        this.$store.dispatch(
          "getFolders",
          "8aaaa550-a7f6-4a14-886f-1dad8d742a2d"
        );
      })
      .catch((err) => err),
};

export default FolderApi;
