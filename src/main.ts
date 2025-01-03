import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import WebSocketService from "@/services/websocketService";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Toast);

WebSocketService.connect("ws://localhost:5029/ws");

app.mount('#app');
