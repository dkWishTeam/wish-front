import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { createPinia } from "pinia";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const app = createApp(App).use(store).use(router).use(createPinia());
app.provide("toastr", toastr);
app.mount("#app");
