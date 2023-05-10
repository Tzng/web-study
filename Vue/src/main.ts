import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import CountButton from "@/components/CountButton.vue";
import Card from "@/components/Card.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('QuanJuCountButton', CountButton).component('Card', Card)

app.mount('#app')
