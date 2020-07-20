import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css';
import './assets/css/swiper.min.css';
/* eslint-disable no-unused-vars */
import Vuelidate from 'vuelidate';
import router from './router/router';
import jQuery from 'jquery';
import './assets/js/swiper.min.js';
import './assets/js/parallax';
import './assets/js/main.js';
import './assets/js/jquery-3.4.1.min';

window.$ = jQuery;
import VueSwal from 'vue-swal'

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(VueSwal)

new Vue({
    render: h => h(App),
    jQuery,
    router
}).$mount('#app')