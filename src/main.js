import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import plugins from './plugins/plugin-kit'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).use(plugins).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
