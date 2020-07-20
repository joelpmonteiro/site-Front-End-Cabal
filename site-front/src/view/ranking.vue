<template>
<div>
    <compHeader />
    <Header2 />
    <div class="container">
        <div class="content">
            <div class="page-title">
                <h1>Top Servers</h1>
            </div>
            <!--page-title-->
            <div class="rankingsButtonsBlock">
                <div class="rankingsButtons">
                    <a class="tab-button active" data-tab="topPlayers">Top players</a>
                    <a class="tab-button" data-tab="topClans">Top clans</a>
                </div>
            </div>
            <!--rankingsButtonsBlock-->
            <div class="rankBlock tab-block active" id="topPlayers">
                <div class="rankBlock-block flex-s-c">
                    <div class="rank" v-for="(ranking,index) in this.top2" :key="index">
                        <div class="rank-number">
                            <img src="../assets/images/number_one.png" alt="" v-if="index == 0">
                            <img src="../assets/images/number_two.png" alt="" v-else>
                        </div>
                        <div class="rank-info">
                            <div class="rank-info_ava">
                                <a href="" v-if="index == 0"><img src="../assets/images/ava_1.png" alt=""></a>
                                <a href="" v-else><img src="../assets/images/ava_2.png" alt=""></a>

                            </div>
                            <div class="rank-info_text">
                                <div class="rank-nickName">
                                    <b>{{ranking.Name}}</b> <span class="color-red" v-if="ranking.Login == 0">(offline)</span>
                                    <span class="color-green" v-else>(online)</span>
                                </div>
                                <div class="rank-lvl">
                                    Sem Guild, <span class="color-white">{{ranking.LEV}}</span> level
                                </div>
                            </div>
                            <div class="rank-kills">
                                Rank: {{numberFormat(ranking.Reputation)}}
                            </div>
                        </div>
                    </div>
                </div>
                <!--rankBlock-block-->
                <div class="scroll-tableBlock">
                    <div class="scroll-table">
                        <table class="tableRank">
                            <thead>
                                <tr>
                                    <td>Rank</td>
                                    <td>NickName</td>
                                    <td>Class/Nation</td>
                                    <td>Level</td>
                                    <td>Guild</td>
                                    <td>Reputation</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(rankingChar,index) in this.rankingChar" :key="index">
                                    <td>{{cont(index)}}</td>
                                    <td>{{rankingChar.Name}}
                                        <span class="color-red" v-if="rankingChar.Login == 0">(offline)</span>
                                        <span class="color-green" v-else>(online)</span>
                                    </td>
                                    <td>
                                        <img v-bind:src="otherfunc('icon',rankingChar.Style)" alt="">
                                        <img v-bind:src="otherfunc('nation',rankingChar.Nation)" alt="">
                                    </td>
                                    <td>{{rankingChar.LEV}}</td>
                                    <td>Sem Guild</td>
                                    <td>{{numberFormat(rankingChar.Reputation)}}</td>
                                </tr>
                                <!-- <tr>
                                    <td>4</td>
                                    <td>Jhon</td>
                                    <td><a href=""><img src="../assets/images/ava_2.png" alt=""></a> Night Elf</td>
                                    <td>80</td>
                                    <td>Pro-Players</td>
                                    <td>345 / 405</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Junior <span class="color-green">(online)</span></td>
                                    <td><a href=""><img src="../assets/images/ava_1.png" alt=""></a> Human</td>
                                    <td>80</td>
                                    <td>Knights</td>
                                    <td>451 / 405</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Jhon</td>
                                    <td><a href=""><img src="../assets/images/ava_2.png" alt=""></a> Night Elf</td>
                                    <td>80</td>
                                    <td>Pro-Players</td>
                                    <td>345 / 405</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Junior <span class="color-green">(online)</span></td>
                                    <td><a href=""><img src="../assets/images/ava_1.png" alt=""></a> Human</td>
                                    <td>80</td>
                                    <td>Knights</td>
                                    <td>451 / 405</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Jhon</td>
                                    <td><a href=""><img src="../assets/images/ava_2.png" alt=""></a> Night Elf</td>
                                    <td>80</td>
                                    <td>Pro-Players</td>
                                    <td>345 / 405</td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--rankBlock-->
            <div class="rankBlock tab-block" id="topClans">
                <h1 v-if="this.guild.length === 0">{{this.msg}}</h1>
            </div>
        </div>
        <!--content-->
    </div>
    <!--container-->
    <Footer></Footer>

</div>
</template>

<script>
/*eslint-disable no-undef*/
/* eslint-disable */
import compHeader from '../components/Header';
import Header2 from '../components/componentsB/header2';
import Footer from '../components/footer';
import axios from '../services/servicesAxios.js';
export default {
    name: 'ranking',
    components: {
        compHeader,
        Header2,
        Footer
    },
    data() {
        return {
            rankingChar: '',
            top2: {},
            msg: '',
            guild: '',
            contador: 3
        }
    },
    // watch: {
    //     className: function (style) {
    //         return (style === 1) ? 'Guerreiro': (style === 2)? 'Duelista': (style === 3) ? 'Mago': (style === 4)? 'Arqueiro Arcano': (style === 5)?'Guardião Arcano': 'Espadachim Arcano';
    //     }
    // },
    methods: {
        otherfunc: function (event, style) {
            if (event === 'icon') {
                return (style === 1) ? require('../assets/images/icon-class/0_1.png') : (style === 2) ? require('../assets/images/icon-class/0_2.png') : (style === 3) ? require('../assets/images/icon-class/0_3.png') : (style === 4) ? require('../assets/images/icon-class/0_4.png') : (style === 5) ? require('../assets/images/icon-class/0_5.png') : require('../assets/images/icon-class/0_6.png');

            } else if (event === 'className') {
                return (style === 1) ? 'Guerreiro' : (style === 2) ? 'Duelista' : (style === 3) ? 'Mago' : (style === 4) ? 'Arqueiro Arcano' : (style === 5) ? 'Guardião Arcano' : 'Espadachim Arcano';

            } else {
                return (style === 0) ? require('../assets/images/nation/help-icon.png') : (style === 1) ? require('../assets/images/nation/capella.png') : require('../assets/images/nation/procyon.png');

            }
        },
        numberFormat(number) {
            let nf = Intl.NumberFormat();
            return nf.format(number);
        },
        cont(index) {
            return this.contador + index;
        }
    },
    computed: {
        ind: {
            get: function () {
                return this.contador;
            },

            set: function (newValue) {
                this.contador = newValue + 3
                console.log(this.contador)
            }
        }
    },
    mounted() {
        $('.tab-button').click(function () {
            $('.tab-button').removeClass('active');
            $(this).addClass('active');
            $('.tab-block').removeClass('active');
            $('#' + $(this).attr('data-tab')).addClass('active');
        })

        $('.buttonTop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
        });

        let body = document.querySelector('body');
        body.setAttribute('class', 'page')
        axios.ranking().then((value) => {
            this.rankingChar = value.infChar.filter((x, index) => {
                if (index >= 2) {
                    return value.infChar[index];
                }
            })
            this.top2 = value.infChar.filter((x, index) => {
                if (index < 2) {
                    return value.infChar[index];
                }
            })

        })

        axios.guild().then((value) => {
            if (value.status === 200) {
                this.guild = value.data;
            } else {
                this.msg = 'Nenhuma Guild Cadastrado no banco de dados'
            }
        }).catch((err) => {
            this.msg = 'Nenhuma Guild Cadastrado no banco de dados'
        })

    }
}
</script>

<style>

</style>
