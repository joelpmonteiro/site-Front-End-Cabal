<template>
<div>
    <Header />
    <Content v-on:changeValor="valor" />
    <Center />
    <!-- <Registration /><pending v-else/> -->
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
import scrollTese from '../services/scroll';

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
        valor() {
        }
    },
    created() {
        EV.on('activation', (auth, user) => {
                this.isActivation = auth;
                //this.$set('msg', foo)
            }),
            EV.on('user', (user) => {
                this.sendUser = user;
                //this.$set('msg', foo)
            })
        EV.on('recovery', (auth, view) => {
            this.isActivation = auth;
            this.view = view;
            //this.$set('msg', foo)
        })
    },
    mounted() {
        $('.buttonTop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
        });

        const subMenu = document.querySelectorAll('.fastPlay a[href^="\\#"]');

        subMenu.forEach(item => {
            item.addEventListener('click', scrollTese.scrollToIdOnClick);
        });

        let body = document.querySelector('body');
        body.removeAttribute('class', 'page')

        $(document).ready(function () {
            var overlay = $('#overlay');
            var open_modal = $('.open_modal');
            var close = $('.modal_close, #overlay');
            var modal = $('.modal_div');
            open_modal.click(function (event) {
                event.preventDefault();
                var div = $(this).attr('href');
                overlay.fadeIn(400,
                    function () {
                        $(div)
                            .css('display', 'block')
                            .animate({
                                opacity: 1,
                                top: '20%'
                            }, 200);
                    });
            });

            close.click(function () {
                modal
                    .animate({
                            opacity: 0,
                            top: '15%'
                        }, 200,
                        function () {
                            $(this).css('display', 'none');
                            overlay.fadeOut(400);
                        }
                    );
            });
        });
    },
}
</script>

<style>
</style>
