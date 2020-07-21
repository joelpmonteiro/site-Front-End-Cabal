<template>
<div>
    <Header />
    <Content v-on:changeValor="valor" />
    <Center />
    <router-view></router-view>
    <Footer />
    <Login />
</div>
</template>

<script>
/*eslint-disable no-undef*/
/* eslint-disable */
import Header from '../components/Header';
import Content from '../components/Content';
import Center from '../components/center';
import Registration from '../components/registration';
import Footer from '../components/footer';
import Login from '../components/login';
import pending from '../components/PendingRegister';
import recovery from '../components/recoveryPassword';
import {
    EV
} from '../services/middleware/eventBus'
export default {
    name: 'Home',
    components: {
        Header,
        Content,
        Center,
        Registration,
        pending,
        Footer,
        Login,
    },
    data() {
        return {
            isActivation: false,
            sendUser: '',
            view: ''
        }
    },
    methods: {
        valor() {}
    },

    mounted() {
        $('.buttonTop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
        });

        let body = document.querySelector('body');
        body.removeAttribute('class', 'page')

        
    },
}
</script>

<style>
</style>
