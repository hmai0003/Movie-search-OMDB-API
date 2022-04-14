import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue';
import AlertIcon from 'vue-ionicons/dist/ios-search.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueObserveVisibility from "vue-observe-visibility";


import App from './App.vue';
import store from './store';


const  app = createApp(App);
app.component('alert-icon', AlertIcon);
app.use(store);


app.use(VueAxios, axios);
app.use(VueObserveVisibility);



app.mount('#app');
