import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createRouter, createWebHistory } from 'vue-router';
import WatchList from './Components/Watchlist/WatchList.vue';
import MainContent from './Components/MainContent.vue' ;


import App from './App.vue';
import store from './store';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/home'
        },
        {
            component: MainContent,
            path: '/home'
        },
        {   path: '/watchlist', 
            component: WatchList 
        }
    ]
})

const  app = createApp(App);
app.use(store);
app.use(router);


app.use(VueAxios, axios);


app.mount('#app');
