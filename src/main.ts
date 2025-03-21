import { createApp } from "vue";
import { store } from "./store";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";

import "vant/es/dialog/style";
import "vant/es/toast/style";

import { initializeDarkMode } from "@/utils/dark-mode";
import App from "./App.vue";
import router from "./router";
import { useRichText } from "@zclzone/utils";

initializeDarkMode();

const app = createApp(App);
app.use(store);
app.use(router);
app.use(useRichText);

app.mount("#app");
