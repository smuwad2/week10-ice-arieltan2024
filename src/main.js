import { createApp } from 'vue'
import router from './route/routes.js' // for routing 
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'


const app = createApp(App)
app.use(router).mount('#app')
