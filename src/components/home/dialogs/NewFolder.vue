<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon @click="handleCloseFolder">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="handleAdd" color="primary"> Add </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <v-form ref="formAddFolder">
        <div class="text-h6 pb-5">New folder :</div>

        <v-text-field
          v-model="name"
          label="Name"
          outlined
          clearable
          required
          :rules="ruleRequired"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "NewFolder",
  data: () => ({
    name: "",
    ruleRequired: [(v) => !!v || "Ce champ est obligatoire"],
  }),
  methods: {
    handleCloseFolder() {
      this.$emit("handleCloseFolder");
    },
    handleAdd: function () {
      if (this.$refs.formAddFolder.validate()) {
        this.$store.commit("newFolder", this.name);
        this.handleClose();
      }
    },
  },
};
</script>
