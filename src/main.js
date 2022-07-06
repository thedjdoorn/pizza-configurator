import { createApp } from 'vue'
import App from './App.vue'

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

let app = createApp(App).use(BalmUI, {
    $theme: {
        primary: '#556F3B'
    }
}).use(BalmUIPlus).mount('#app')
