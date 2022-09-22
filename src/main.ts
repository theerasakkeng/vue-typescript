import { createApp } from "vue";
import "./assets/style.css";
import App from "@/App.vue";
import router from "./router";

const vue = createApp(App);

vue.use(router);
vue.mount("#app");
