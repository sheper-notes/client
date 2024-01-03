import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';
import VueKonva from 'vue-konva';




const app = createApp(App)

app.use(VueKonva);
app.use(router)
app.use(
    createAuth0({
        domain: "sheper.eu.auth0.com",
        clientId: "0E2mHwwOf4soisLRscKOHabEFVq4hZtZ",
        
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: "https://sheper.eu.auth0.com/api/v2/"
        }
      })
)
app.mount('#app')
