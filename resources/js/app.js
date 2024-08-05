require('./bootstrap');

import { createApp } from 'vue';
import WelcomeComponent from './components/Welcome.vue';

const app = createApp({});
app.component('example-component', WelcomeComponent);
app.mount('#app');