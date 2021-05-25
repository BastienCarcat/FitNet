import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#CA0202",
        black: "#1e201e",
        background: "#F4F4F4",
      },
    },
  },
});
