import './assets/main.css'
import '@/assets/icons/icomoon/style.css';
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'

const app= createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
