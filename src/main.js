import { createApp } from 'vue';
import AlertIcon from 'vue-ionicons/dist/ios-search.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue';

import SearchBar  from './Components/SearchBar';


const  app = createApp(App);
app.component('alert-icon', AlertIcon)

app.component('search-bar', SearchBar);
app.use(VueAxios, axios)



app.mount('#app');
