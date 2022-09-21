import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import router from "@/router";

const vue = createApp(App)
createApp(App).mount("#app");
