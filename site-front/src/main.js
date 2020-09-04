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

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         console.log(!localStorage.getItem('user-data'))
//         if (!localStorage.getItem('user-data')) {
//             console.log('teste se nao está logado')
//             next({
//                 path: '/'
//             })
//         } else {
//             console.log('teste se está logado')

//             next()
//         }
//     } else if (localStorage.getItem('user-data')) {
//         console.log('teste se estar com jwt')
//         next({ path: '/' }) // make sure to always call next()!
//     } else {
//         console.log('teste se erro')
//         next()
//     }
// })

new Vue({
    render: h => h(App),
    jQuery,
    router
}).$mount('#app')