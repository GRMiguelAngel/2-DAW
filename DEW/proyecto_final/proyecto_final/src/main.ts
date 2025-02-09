import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'

// const i18n = createI18n({})

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(i18n)

app.mount('#app')
