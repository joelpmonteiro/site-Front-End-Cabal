<template>
<div id="app">
    <!-- <Header />
    <Content />
    <Center />
    <Registration />
    <Footer />
    <Login /> -->
    <router-view></router-view>
</div>
</template>

<script>
import scrollTese from './services/scroll';

/* eslint-disable */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
/* eslint-env jquery */
/* global _ */
/*eslint-disable no-undef*/
/*eslint-disable no-redeclare*/
/*eslint-disable no-empty*/
/*eslint-disable comma-dangle*/
import {
    EV
} from './services/middleware/eventBus';
export default {
    name: 'App',
    data() {
        return {
            players: 0
        }
    },
    created() {

    },
    mounted() {
        EV.on('players', (player) => {
            console.log('teste : ', player)

            this.player = player;
        })
        // var test = document.querySelector('.vue-tel-input');
        // test.classList.add('vuephone')
        const menuItems = document.querySelectorAll('.menu a[href^="\\#"]');

        menuItems.forEach(item => {
            item.addEventListener('click', scrollTese.scrollToIdOnClick);
        });
        const subMenu = document.querySelectorAll('.fastPlay a[href^="\\#"]');

        subMenu.forEach(item => {
            item.addEventListener('click', scrollTese.scrollToIdOnClick);
        });


    },
}
</script>

<style>
.vuephone {
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.painel {
    width: 40px;
}
</style>
