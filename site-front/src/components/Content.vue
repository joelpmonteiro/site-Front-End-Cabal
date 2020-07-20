<template>
<header>
    <div class="header-shadow">
        <div class="paralax paralax-sparks">
            <div class="sparks_1"></div>
            <div class="feathers"></div>
            <div class="sparks_2"></div>
        </div>
        <div class="container">
            <div class="sparks">
                <div class="sparks_3"></div>
                <div class="sparks_4"></div>
                <div class="sparks_5"></div>
                <div class="sparks_6"></div>
            </div>
            <div class="fastPlayBlock flex">
                <a href="" class="download-button">DOWNLOAD <span>GAME CLIENT 3.6GB</span></a>
                <div class="fastPlay flex-c-c">
                    <a href="#modal-register" class="login open_modal" v-if="(this.msg === false && this.auth === false)">

                        <img src="../assets/images/lock-icon.png" alt=""> Login
                    </a>
                    <a href="#modal-register" class="login open_modal" v-else-if="this.msg === true && this.auth === false">

                        <img src="../assets/images/tools.svg" class="painel" alt=""> Painel
                    </a>
                    <a href="#" class="login open_modal" v-else>

                        <img src="../assets/images/tools.svg" class="painel" alt=""> Validar Conta
                    </a>
                    <router-link to="/register" id='register1'>
                        <img src="../assets/images/players-icon.png" alt=""> Register
                    </router-link>
                    <!-- <a href="#/register" class="help">
                        <img src="../assets/images/players-icon.png" alt=""> Register
                    </a> -->
                </div>
            </div>
            <!--fastPlayBlock-->
            <div class="serverBlock flex">
                <div class="radial-stat">
                    <div class="infoSeverBlock infoSeverBlock_1">
                        <ul>
                            <li><a href="#">About server</a></li>
                            <li><a href="#">Vote</a></li>
                            <li><a href="#">Statisticks</a></li>
                            <li><a href="#">Forum</a></li>
                        </ul>
                        <div class="serverStat flex-c-c">
                            <div class="login-stat">
                                <i class="online"></i>
                                Login
                            </div>
                            <div class="login-stat">
                                <i class="offline"></i>
                                Game
                            </div>
                        </div>
                    </div>
                    <!--infoSeverBlock-->
                    <div class="circle-online flex-c-c drop-button" data-tab="infoSeverBlock_1">
                        <div class="serverInfo">
                            <span class="serverInfo_x">Players Online</span>
                            <span class="serverInfo_online color-green">{{this.players}}</span>
                        </div>
                        <div class="circlestat" data-dimension="190" data-width="6" data-fontsize="12" :data-percent="players" data-fgcolor="#8cc727" data-bgcolor="rgba(151, 255, 88, 0)"></div>
                    </div><!-- circle-online -->
                </div><!-- radial-stat -->
                <div class="radial-stat">
                    <div class="infoSeverBlock infoSeverBlock_2">
                        <ul>
                            <li><a href="#">About server</a></li>
                            <li><a href="#">Vote</a></li>
                            <li><a href="#">Statisticks</a></li>
                            <li><a href="#">Forum</a></li>
                        </ul>
                        <div class="serverStat flex-c-c">
                            <div class="login-stat">
                                <i class="online"></i>
                                Login
                            </div>
                            <div class="login-stat">
                                <i class="offline"></i>
                                Game
                            </div>
                        </div>
                    </div>
                    <!--infoSeverBlock-->
                    <div class="circle-online flex-c-c drop-button" data-tab="infoSeverBlock_2">
                        <div class="serverInfo">
                            <span class="serverInfo_x">NEW x120</span>
                            <span class="serverInfo_online color-orange">897</span>
                        </div>
                        <div id="circlestat" class="circlestat" data-dimension="190" data-width="6" data-fontsize="12" data-percent="100" data-fgcolor="#db591a" data-bgcolor="rgba(151, 255, 88, 0)"></div>
                    </div><!-- circle-online -->
                </div><!-- radial-stat -->
            </div>
            <!--serverBlock-->
            <div class="newsBlock flex">
                <div class="newsBlockLeft">
                    <div class="swiper-container swiper-news">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slideImg">
                                <img class="sliderLogo" src="../assets/images/white-logo.png" alt="">
                                <a href="" class="playButtonSlider bright"></a>
                                <h2 class="slider-title">NEW <br> WORLD</h2>
                            </div>
                            <img class="swiper-slide" src="../assets/images/slider-img.jpg" alt="">
                            <img class="swiper-slide" src="../assets/images/slider-img.jpg" alt="">
                            <img class="swiper-slide" src="../assets/images/slider-img.jpg" alt="">
                        </div>
                        <div class="newsPagination">
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                            <!-- Add Arrows -->
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div><!-- swiper-news -->
                </div>
                <div class="newsBlockright flex">
                    <div class="streamBlock">
                        <a href="" class="streamBlock-video" v-bind:style="styleObj">
                            <div class="streamBlock-video_info">
                                <i></i> Events Sream #1 <span>02:34</span>
                            </div>
                        </a>
                        <a href="" class="streamBlock-video" style="background-image: url(../assets/images/video-img_2.jpg);">
                            <div class="streamBlock-video_info">
                                <i></i> Events Sream #2 <span>02:34</span>
                            </div>
                        </a>
                        <a href="" class="streamBlock-video" style="background-image: url(../assets/images/video-img_3.jpg);">
                            <div class="streamBlock-video_info">
                                <i></i> Events Sream #3 <span>02:34</span>
                            </div>
                        </a>
                    </div>
                    <div class="news-block">
                        <div class="news-block-tab-buttons">
                            <span class="active tab-button" data-tab="news">News</span>
                            <span class="tab-button" data-tab="updates">Updates</span>
                            <span class="tab-button" data-tab="events">Events</span>
                            <router-link to="/Notice" target="_blank"><span class="tab-button">All</span></router-link>
                        </div>
                        <div class="news-message flex">
                            <h3>PRE-REGISTER FOR SEASON V OPEN</h3>
                            <span>2019-09-21</span>
                        </div>
                        <div class="news-block-tab tab-block active" id="news">
                            <div class="news">
                                <a href="#"><span class="color-green">[Update]</span> New fixes on PVP</a>
                                <span class="date">2019-09-23</span>
                            </div>
                            <div class="news">
                                <a href="#"><span class="color-blue">[News]</span> New corrections</a>
                                <span class="date">2019-09-23</span>
                            </div>
                            <div class="news">
                                <a href="#"><span class="color-yellow">[Event]</span> Implantment of a new PVP Implantment of a new PV</a>
                                <span class="date">2019-09-23</span>
                            </div>
                        </div>
                        <div class="news-block-tab tab-block" id="updates">
                            <div class="news">
                                <a href="#"><span class="color-green">[Update]</span> ASDASDASDASDASDASDA</a>
                                <span class="date">2019-09-23</span>
                            </div>
                            <div class="news">
                                <a href="#"><span class="color-blue">[Update]</span> New ADASDASDASDADASDASDAS</a>
                                <span class="date">2019-09-23</span>
                            </div>
                        </div>
                        <div class="news-block-tab tab-block" id="events">
                            <div class="news">
                                <a href="#"><span class="color-yellow">[Events]</span> ASDASDASDASDASDASDA</a>
                                <span class="date">2019-09-23</span>
                            </div>
                            <div class="news">
                                <a href="#"><span class="color-yellow">[Events]</span> New ADASDASDASDADASDASDAS</a>
                                <span class="date">2019-09-23</span>
                            </div>
                        </div>
                        <div class="load-more">
                            <a href="#">Load more</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--newsBlock-->
        </div>
        <!--container-->
    </div>
</header>
<!--header-->
</template>

<script>
/*eslint-disable no-undef*/
/* eslint-disable */
import Swiper from 'swiper';
import {
    EV
} from '../services/middleware/eventBus';
import axios from '../services/servicesAxios';
export default {
    name: 'Content',
    data() {
        return {
            styleObj: "background-image: url(../assets/images/slider-img.jpg)",
            msg: false,
            auth: false,
            players: 0
        }
    },
    methods: {
        emitEventPlayers(players) {
            console.log(players)
            EV.emit('players', players)
        },
    },
    created() {
        EV.on('sample-event', (isLogin, auth) => {
            this.msg = isLogin;
            this.auth = auth;
            //this.$set('msg', foo)
        })
    },
    computed: {
        online() {
            return this.players
        }
    },
    mounted() {
        let tagA = document.querySelector('.open_modal')
        let img = tagA.querySelector('img');

        axios.playersOnline().then(value => {
            if (value.status == 200) {
                this.players = value.data.Login;
                this.emitEventPlayers(this.players);
            } else return this.players = 0
        }).catch((err) => {
            this.players = 0
            console.log(err)
        });

        function active(obj, string) {
            obj.querySelector();
        }
        //Muda as SubTabs --> entre News,Events etc
        let subtabs = document.querySelector(".news-block");
        let spanTab = subtabs.querySelectorAll('span[data-tab]');
        //let submenu = subtabs.querySelectorAll('.news-block-tab-buttons')

        spanTab.forEach((event, index) => {
            let dataTab = event.getAttribute('data-tab')

            event.addEventListener('click', (evt) => {
                let act = document.querySelector('span.active').classList;
                console.log(act)
                if (act == undefined) {
                    console.log('ELSE IF')

                } else {
                    console.log(document.querySelector('span.active').classList.remove('active'));

                    let block = document.querySelector('.news-block-tab.tab-block.active');

                    if (dataTab == 'news') {
                        console.log('news: ', dataTab)

                        spanTab[index].classList.length == 2 ? spanTab[index].classList.remove('active') : spanTab[index].classList.add('active');

                        console.log('newssssss: ', document.querySelector("#".concat(dataTab)).classList.add("active"))
                        block.classList.length > 2 ? block.classList.remove('active') : document.querySelector("#".concat(dataTab)).classList.add("active")

                    } else if (dataTab == 'updates') {
                        console.log('updates: ', dataTab)

                        spanTab[index].classList.remove('active')
                        spanTab[index].classList.length == 2 ? spanTab[index].classList.remove('active') : spanTab[index].classList.add('active');

                        console.log('newssssss: ', document.querySelector("#".concat(dataTab)).classList.add("active"))
                        block.classList.length > 2 ? block.classList.remove('active') : document.querySelector("#".concat(dataTab)).classList.add("active")

                    } else if (dataTab == 'events') {
                        console.log('events: ', dataTab)

                        spanTab[index].classList.remove('active')
                        spanTab[index].classList.length == 2 ? spanTab[index].classList.remove('active') : spanTab[index].classList.add('active');

                        console.log('newssssss: ', document.querySelector("#".concat(dataTab)).classList.add("active"))
                        block.classList.length > 2 ? block.classList.remove('active') : document.querySelector("#".concat(dataTab)).classList.add("active")
                    }
                }
            })
        })
        console.log(spanTab);

        (function ($) {

            $.fn.circliful = function (options) {

                var settings = $.extend({
                    // These are the defaults.
                    foregroundColor: "#556b2f",
                    backgroundColor: "#eee",
                    fillColor: false,
                    width: 15,
                    dimension: 200,
                    size: 15,
                    percent: 50,
                    animationStep: 1.0
                }, options);
                return this.each(function () {
                    var dimension = '';
                    var text = '';
                    var info = '';
                    var width = '';
                    var size = 0;
                    var percent = 0;
                    var endPercent = 100;
                    var fgcolor = '';
                    var bgcolor = '';
                    var icon = '';
                    var animationstep = 0.0;

                    $(this).addClass('circliful');

                    if ($(this).data('dimension') != undefined) {
                        dimension = $(this).data('dimension');
                    } else {
                        dimension = settings.dimension;
                    }

                    if ($(this).data('width') != undefined) {
                        width = $(this).data('width');
                    } else {
                        width = settings.width;
                    }

                    if ($(this).data('fontsize') != undefined) {
                        size = $(this).data('fontsize');
                    } else {
                        size = settings.size;
                    }

                    if ($(this).data('percent') != undefined) {
                        percent = $(this).data('percent') / 100;
                        console.log('teste: ', $(this).data('percent'))
                        endPercent = $(this).data('percent');
                    } else {
                        percent = settings.percent / 100;
                    }

                    if ($(this).data('fgcolor') != undefined) {
                        fgcolor = $(this).data('fgcolor');
                    } else {
                        fgcolor = settings.foregroundColor;
                    }

                    if ($(this).data('bgcolor') != undefined) {
                        bgcolor = $(this).data('bgcolor');
                    } else {
                        bgcolor = settings.backgroundColor;
                    }

                    if ($(this).data('animation-step') != undefined) {
                        animationstep = parseFloat($(this).data('animation-step'));
                    } else {
                        animationstep = settings.animationStep;
                    }
                    if ($(this).data('text') != undefined) {
                        text = $(this).data('text');

                        if ($(this).data('icon') != undefined) {
                            icon = '<i class="fa ' + $(this).data('icon') + '"></i>';
                        }

                        if ($(this).data('type') != undefined) {
                            type = $(this).data('type');

                            if (type == 'half') {
                                $(this).append('<span class="circle-text-half">' + icon + text + '</span>');
                                $(this).find('.circle-text-half').css({
                                    'line-height': (dimension / 1.45) + 'px',
                                    'font-size': size + 'px'
                                });
                            } else {
                                $(this).append('<span class="circle-text">' + icon + text + '</span>');
                                $(this).find('.circle-text').css({
                                    'line-height': dimension + 'px',
                                    'font-size': size + 'px'
                                });
                            }
                        } else {
                            $(this).append('<span class="circle-text">' + icon + text + '</span>');
                            $(this).find('.circle-text').css({
                                'line-height': dimension + 'px',
                                'font-size': size + 'px'
                            });
                        }
                    } else if ($(this).data('icon') != undefined) {

                    }

                    if ($(this).data('info') != undefined) {
                        info = $(this).data('info');

                        if ($(this).data('type') != undefined) {
                            type = $(this).data('type');

                            if (type == 'half') {
                                $(this).append('<span class="circle-info-half">' + info + '</span>');
                                $(this).find('.circle-info-half').css({
                                    'line-height': (dimension * 0.9) + 'px',
                                });
                            } else {
                                $(this).append('<span class="circle-info">' + info + '</span>');
                                $(this).find('.circle-info').css({
                                    'line-height': (dimension * 1.25) + 'px',
                                });
                            }
                        } else {
                            $(this).append('<span class="circle-info">' + info + '</span>');
                            $(this).find('.circle-info').css({
                                'line-height': (dimension * 1.25) + 'px',
                            });
                        }
                    }

                    $(this).width(dimension + 'px');

                    var canvas = $('<canvas></canvas>').attr({
                        width: dimension,
                        height: dimension
                    }).appendTo($(this)).get(0);
                    var context = canvas.getContext('2d');
                    var x = canvas.width / 2;
                    var y = canvas.height / 2;
                    var degrees = percent * 360.0;
                    var radians = degrees * (Math.PI / 180);
                    var radius = canvas.width / 2.5;
                    var startAngle = 2.3 * Math.PI;
                    var endAngle = 0;
                    var counterClockwise = false;
                    var curPerc = animationstep === 0.0 ? endPercent : 0.0;
                    var curStep = Math.max(animationstep, 0.0);
                    var circ = Math.PI * 2;
                    var quart = Math.PI / 2;
                    var type = '';
                    var fill = false;

                    if ($(this).data('type') != undefined) {
                        type = $(this).data('type');

                        if (type == 'half') {
                            var startAngle = 2.0 * Math.PI;
                            var endAngle = 3.13;
                            var circ = Math.PI * 1.0;
                            var quart = Math.PI / 0.996;
                        }
                    }

                    if ($(this).data('fill') != undefined) {
                        fill = $(this).data('fill');
                    } else {
                        fill = settings.fillColor;
                    }
                    //animate foreground circle
                    function animate(current) {
                        context.clearRect(0, 0, canvas.width, canvas.height);

                        context.beginPath();
                        context.arc(x, y, radius, endAngle, startAngle, false);
                        context.lineWidth = width - 1;

                        // line color
                        context.strokeStyle = bgcolor;
                        context.stroke();

                        if (fill) {
                            context.fillStyle = fill;
                            context.fill();
                        }

                        context.beginPath();
                        context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                        context.lineWidth = width;
                        // line color
                        context.strokeStyle = fgcolor;
                        context.stroke();

                        if (curPerc < endPercent) {
                            curPerc += curStep;
                            requestAnimationFrame(function () {
                                animate(Math.min(curPerc, endPercent) / 100);
                            });
                        }

                    }

                    animate(curPerc / 100);

                });

            };

        }(jQuery));

        $('.food').each(function () {
            $(this).circliful();
        });

        new Swiper('.swiper-news', {
            autoplay: {
                delay: 4000,
            },
            speed: 1000,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        $(".drop-button").click(function () {
            $(this).toggleClass("active");
            $('.' + $(this).attr('data-tab')).slideToggle();
        });
    },
}
</script>

<style>
</style>
