import Vue from "vue";
import VueRouter from "vue-router";
import landtiles from "../views/landtiles.vue";
import about from "../views/about.vue";
import landing from "../views/landing.vue";
import faq from "../views/faq.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/landtiles",
    name: "Land Tiles",
    component: landtiles,
  },
  {
    path: "/",
    name: "Landing",
    component: landing,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: faq,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
