require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSocialauth from 'vue-social-auth';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";


import store from './Store/index';
import router from './Router/index';
import App from './App.vue';
import config from './vue.config';

window.axios.defaults.withCredentials = true;
window.axios.defaults.baseURL = config.baseUrl;
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
Vue.prototype.$http = axios;
const token = store.state.token;
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(VueSocialauth, {
    providers: {
        google: {
            clientId: '333429272007-it580ggnm02d3ibs6dfpdppkruc99fmk.apps.googleusercontent.com',
            redirectUri: config.redirectGoogle
        }
    }
});


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    store,
    router,
    components: { App }
});
