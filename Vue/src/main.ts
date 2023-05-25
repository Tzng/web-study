import {createApp} from 'vue'
import {createPinia} from 'pinia'
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

import App from './App.vue'
import router from './router'

import './assets/main.css'
import CountButton from "@/components/CountButton.vue";
import Card from "@/components/Card.vue";

dayjs.extend(dayOfYear)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('QuanJuCountButton', CountButton).component('Card', Card)

app.mount('#app')
