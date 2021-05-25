<template>
  <v-container>
    <div class="d-flex justify-space-between align-center pb-5">
      <div class="text-h4">My workouts :</div>
      <v-btn icon @click="handleCloseFolder()">
        <v-icon color="primary" size="28">mdi-folder-plus-outline</v-icon>
      </v-btn>
    </div>
    <template v-for="folder in folders">
      <div :key="folder.id">
        <div class="d-flex justify-space-between align-center">
          <div class="text-h5">
            {{ folder.name }}
          </div>

          <v-btn icon @click="handleCloseMore(folder.id)">
            <v-icon color="primary">mdi-dots-horizontal</v-icon>
          </v-btn>
        </div>
        <div class="d-flex overflow-x-auto">
          <div
            v-for="workout in folder.workouts"
            :key="workout.id"
            class="pa-3"
          >
            <Training :name="workout.name" :add="false" />
          </div>
          <div class="pa-3">
            <Training :add="true" />
          </div>
        </div>
      </div>
    </template>
    <v-dialog v-model="dialogFolder" max-width="290">
      <NewFolder @handleCloseFolder="handleCloseFolder" />
    </v-dialog>
    <v-dialog v-model="dialogMore" max-width="290">
      <MoreFolder @handleCloseMore="handleCloseMore" :idFolder="idFolder" />
    </v-dialog>
  </v-container>
</template>

<script>
import Training from "./Training";
import NewFolder from "./dialogs/NewFolder";
import MoreFolder from "./dialogs/MoreFolder";
export default {
  name: "FoldersList",
  data() {
    return {
      folders: [],
      dialogFolder: false,
      dialogMore: false,
      idFolder: "",
    };
  },
  components: {
    Training,
    NewFolder,
    MoreFolder,
  },
  methods: {
    getFolders() {
      this.folders = this.$store.state.folders;
    },
    handleCloseFolder() {
      this.dialogFolder = !this.dialogFolder;
    },
    handleCloseMore(idFolder) {
      this.dialogMore = !this.dialogMore;
      if (this.dialogMore) {
        this.idFolder = idFolder;
      }
    },
  },
  created() {
    this.getFolders();
  },
};
</script>

<style scoped></style>
