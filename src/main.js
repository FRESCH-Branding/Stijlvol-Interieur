import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/global.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import analytics */
import VueGtag from "vue-gtag";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faCompass);
library.add(faQuoteLeft);
library.add(faQuoteRight);
library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faArrowUpRightFromSquare);
library.add(faAnglesDown);

createApp(App)
  .use(router)
  .use(VueGtag, {config: { id: "G-FL9K17K9HN" }})
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
