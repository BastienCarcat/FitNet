<template>
  <v-container>
    <div class="d-flex justify-space-between align-center pb-5">
      <div class="text-h4">My workouts :</div>
      <v-btn icon @click="switchDialogFolder()">
        <v-icon color="primary" size="28">mdi-folder-plus-outline</v-icon>
      </v-btn>
    </div>
    <template v-for="folder in folders">
      <div :key="folder.uuidFolder">
        <div class="d-flex justify-space-between align-center">
          <div class="text-h5">
            {{ folder.nameFolder }}
          </div>

          <v-btn icon @click="switchDialogMore(folder.uuidFolder)">
            <v-icon color="primary">mdi-dots-horizontal</v-icon>
          </v-btn>
        </div>
        <div class="d-flex overflow-x-auto">
          <div
            v-for="workout in workouts"
            :key="workout.uuidWorkout"
            v-show="workout.uuidFolder === folder.uuidFolder"
            class="pa-3"
            @click="switchDialogWorkoutDetails(workout.uuidWorkout)"
          >
            <Training :name="workout.nameWorkout" :add="false" />
          </div>
          <div
            class="pa-3"
            @click="
              $router.push({
                name: 'CreateWorkout',
                params: { idFolder: folder.uuidFolder },
              })
            "
          >
            <Training :add="true" />
          </div>
        </div>
      </div>
    </template>
    <v-dialog v-model="dialogFolder" max-width="290">
      <NewFolder @switchDialogFolder="switchDialogFolder" />
    </v-dialog>
    <v-dialog v-model="dialogMore" max-width="290">
      <MoreFolder @switchDialogMore="switchDialogMore" :idFolder="idFolder" />
    </v-dialog>
    <v-dialog v-model="dialogWorkoutDetails" max-width="290">
      <WorkoutDetails
        @switchDialogWorkoutDetails="switchDialogWorkoutDetails"
        :idWorkout="idWorkout"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import Training from "./Training";
import NewFolder from "./dialogs/NewFolder";
import MoreFolder from "./dialogs/MoreFolder";
import WorkoutDetails from "./dialogs/WorkoutDetails";
import { mapState } from "vuex";
export default {
  name: "FoldersList",
  data() {
    return {
      dialogFolder: false,
      dialogMore: false,
      idFolder: "",
      dialogWorkoutDetails: false,
      idWorkout: "",
    };
  },
  components: {
    Training,
    NewFolder,
    MoreFolder,
    WorkoutDetails,
  },
  methods: {
    switchDialogFolder() {
      this.dialogFolder = !this.dialogFolder;
    },
    switchDialogMore(idFolder) {
      this.dialogMore = !this.dialogMore;
      if (this.dialogMore) {
        this.idFolder = idFolder;
      }
    },
    switchDialogWorkoutDetails(idWorkout) {
      this.dialogWorkoutDetails = !this.dialogWorkoutDetails;
      if (this.dialogWorkoutDetails) {
        this.idWorkout = idWorkout;
      }
    },
  },
  computed: {
    ...mapState(["folders", "workouts"]),
  },
  mounted() {
    const uuidUser = localStorage.getItem("uuidUser");
    this.$store.dispatch("getFolders", {
      uuidUser: uuidUser,
    });
    this.$store.dispatch("getWorkouts", {
      uuidUser: uuidUser,
    });
  },
};
</script>

<style scoped></style>
