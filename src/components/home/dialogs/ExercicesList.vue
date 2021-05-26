<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon @click="switchDialogExercice">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text color="primary" @click="addExercices()"> Save </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-text-field
      v-model="search"
      placeholder="Search"
      outlined
      clearable
      dense
      hide-details
      class="px-5 pb-3"
    ></v-text-field>
    <v-list max-height="300" class="overflow" two-line>
      <v-list-item-group multiple v-model="selected" color="primary">
        <template v-for="exercice in searchExercices">
          <v-list-item :value="exercice" :key="exercice.id">
            <v-list-item-avatar>
              <v-img src="../../../assets/logo.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ exercice.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ exercice.muscle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-card-actions class="d-flex justify-center pa-3">
      <v-btn color="primary">
        <v-icon left>mdi-open-in-new</v-icon>
        Create new exercice
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ExerciceList",
  data: () => ({
    search: "",
    exercices: [],
    selected: [],
  }),
  methods: {
    switchDialogExercice() {
      this.$emit("switchDialogExercice");
    },
    getExercices() {
      this.exercices = this.$store.state.exercices;
    },
    addExercices() {
      this.$emit("setExercices", this.selected);
      this.switchDialogExercice();
      this.selected = [];
    },
  },
  computed: {
    searchExercices() {
      if (this.search) {
        return this.exercices.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.exercices;
      }
    },
  },
  created() {
    this.getExercices();
  },
};
</script>

<style scoped>
.overflow {
  overflow-y: auto;
}
</style>
