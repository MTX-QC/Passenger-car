// ===
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// ===

// 引入全局通用样式
import "./assets/css/style.css"
import "./assets/css/util.css"

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";



const app = createApp(App);


app.use(store).use(router);
app.use(ElementPlus)
app.mount("#app");
