import { createApp } from 'vue';
import WelcomeComponent from './components/WelcomeComponent.vue';
import { method } from 'lodash';

const app = createApp({
    data() {

    },
    method: {

    },
    mounted() {
        console.log('eeeeeeeeeeee');
    }
});
app.component('welcome-component', WelcomeComponent);
app.mount('#app');