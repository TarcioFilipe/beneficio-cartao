/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import router from './router'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import './assets/tailwind.css'

const app: any = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')
