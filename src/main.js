import "./assets/main.css";

import { createApp } from "vue";

//pinia
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

//i18n
import i18n from "@/plugins/i18n";

//vee-validate
import veeValidatePlugin from "@/plugins/vee-validate";

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'

//iconify-icon
import "iconify-icon";

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(veeValidatePlugin);
app.use(AOS)

app.mount("#app");
