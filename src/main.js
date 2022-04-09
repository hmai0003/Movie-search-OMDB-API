import { createApp } from 'vue';
import AlertIcon from 'vue-ionicons/dist/ios-search.vue'


import App from './App.vue';
import APITest from './Components/APITest';
import SearchBar  from './Components/SearchBar';


const  app = createApp(App);
app.component('alert-icon', AlertIcon)

app.component('search-bar', SearchBar);
app.component('api-test', APITest);


app.mount('#app');
