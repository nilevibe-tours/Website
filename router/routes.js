import Main from "../src/components/pages/Main.vue";
import Package from "../src/components/pages/Package.vue";
const routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },
  {
    name: "Package",
    path: "/packages/:title",
    component: Package,
    props: true,
  },
];

export default routes;
