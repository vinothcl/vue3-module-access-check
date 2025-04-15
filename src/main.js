import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { haveAccess, noAccess } from '@/helpers'
const app = createApp(App)

app.use(createPinia())
app.directive('haveAccess', haveAccess)
app.directive('noAccess', noAccess)

app.mount('#app');