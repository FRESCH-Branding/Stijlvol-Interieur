import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Over from "../views/Over.vue";
import Projecten from "../views/Projecten.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/over",
    name: "Over",
    component: Over,
  },
  {
    path: "/projecten",
    name: "Projecten",
    component: Projecten,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
