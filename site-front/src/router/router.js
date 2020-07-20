import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home.vue'
import download from '../view/download.vue'
import ranking from '../view/ranking.vue'
import pending from '../components/PendingRegister';
import recovery from '../components/recoveryPassword';
import register from '../components/registration';
import notice from '../view/noticeAll.vue';

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            children: [{
                    path: "/Activation",
                    component: pending,
                    name: 'Activation'

                },
                {
                    path: '/recovery/password',
                    component: recovery,
                    name: 'recovery'
                },
                {
                    path: '/register',
                    component: register,
                    name: 'register'
                }
            ]
        },
        {
            path: '/download',
            component: download,
            name: 'download'
        },
        {
            path: '/ranking',
            component: ranking,
            name: 'ranking'
        },
        {
            path: '/Notice',
            component: notice,
            name: 'notice'
        }

        // {
        //     path: '/Activation',
        //     component: pending,
        //     name: 'pending'
        // }
    ]
})