import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/tabs/Home.vue"),
  },
  {
    path: "/create/:idFolder",
    name: "CreateWorkout",
    props: true,
    component: () => import("@/views/CreateWorkout.vue"),
  },
  {
    path: "/exercices",
    name: "Exercices",
    component: () => import("@/views/tabs/Exercices.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
