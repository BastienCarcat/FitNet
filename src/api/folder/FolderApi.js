import { client } from "../client";

const FolderApi = {
  get: (uuidUser) => client.get(`/folder/recover/${uuidUser}`),

  post: (uuidUser, nameFolder) =>
    client.post("/folder/create/", {
      uuidUser: uuidUser,
      nameFolder: nameFolder,
    }),
  del: (uuidUser, nameFolder) =>
    client.delete(`/folder/delete/${uuidUser}/${nameFolder}`),
};

export default FolderApi;
