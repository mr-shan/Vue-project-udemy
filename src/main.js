import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";
import BaseDialog from "./components/UI/BaseDialog";

import store from "./store/index";
import router from "./router";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.use(store);
app.use(router);

app.mount("#app");
