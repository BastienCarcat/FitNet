<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon @click="switchDialogCreate">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="handleCreate" color="primary"> Create </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <v-form ref="formCreateExercice">
        <div class="text-h6 pb-5">Create new exercice :</div>
        <v-text-field
          v-model="name"
          label="Name"
          outlined
          clearable
          required
          :rules="ruleRequired"
        />
        <!-- <v-autocomplete
          v-model="muscle"
          :items="muscles"
          outlined
          label="Muscle"
          :rules="ruleRequired"
        /> -->
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CreateExercice",
  data: () => ({
    // muscle: "",
    // muscles: [],
    name: "",
    ruleRequired: [(v) => !!v || "This field is mandatory."],
  }),
  methods: {
    switchDialogCreate() {
      this.$emit("switchDialogCreate");
    },
    handleCreate: function () {
      if (this.$refs.formCreateExercice.validate()) {
        this.$store.dispatch("postExercise", {
          uuidUser: localStorage.getItem("uuidUser"),
          nameExercise: this.name,
        });
        this.switchDialogCreate();
      }
    },
    // getMuscles() {
    //   this.muscles = this.$store.state.muscles;
    // },
  },
  // mounted() {
  //   this.getMuscles();
  // },
};
</script>
