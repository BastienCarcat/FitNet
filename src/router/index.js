import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/sign-in",
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/views/authentication/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@/views/authentication/SignUp.vue"),
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
  {
    path: "/current-workout/:idWorkout",
    name: "CurrentWorkout",
    props: true,
    component: () => import("@/views/CurrentWorkout"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
