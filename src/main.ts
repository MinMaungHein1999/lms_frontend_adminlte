import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ContentHeader from './components/ContentHeader.vue'
import CommonContent from './components/CommonContent.vue'
const app = createApp(App)
app.component('content-header', ContentHeader)
.component('common-content', CommonContent)
.use(store).use(router).mount('#app')
