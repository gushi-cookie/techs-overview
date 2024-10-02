import { createApp } from 'vue';
import App from './App.vue';

import "primeicons/primeicons.css";
import './style.css';

import PrimeVue from 'primevue/config';
import Nora from '@primevue/themes/nora';
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Nora,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.component('Button', Button);

app.mount('#app');