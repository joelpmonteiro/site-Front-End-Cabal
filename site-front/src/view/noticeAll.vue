<template>
<div>
    <compHeader />
    <Header2 />
    <div class="container">
        <div class="content">
            <div class="page-title">
                <h1>Notice</h1>
            </div>
            <!--page-title-->
            <div class="rankingsButtonsBlock">
                <div class="rankingsButtons">
                    <a class="tab-button active" data-tab="topPlayers">Notice</a>
                </div>
            </div>
            <!--rankingsButtonsBlock-->
            <div class="rankBlock tab-block active" id="topPlayers">
                <!--rankBlock-block-->
                <div class="scroll-tableBlock">
                    <div class="scroll-table">
                        <table class="tableRank">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Description</td>
                                    <td>Data</td>

                                </tr>
                            </thead>
                            <tbody v-if=" this.notice.length > 0">
                                <tr v-for="(valor,index) in this.notice" :key="index">
                                    <td>
                                        <span class="color-green" v-if="valor.NameNotice == 'Updates'">{{valor.NameNotice}}</span>
                                        <span class="color-yellow" v-else-if="valor.NameNotice == 'Events'">{{valor.NameNotice}}</span>
                                        <span class="color-blue" v-else>{{valor.NameNotice}}</span>
                                    </td>
                                    <td>{{valor.descNotice}}</td>
                                    <td>{{valor.data}} </td>

                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr v-for="(valor,index) in this.notice" :key="index">
                                    <td></td>
                                    <td>Sem Notícias</td>
                                    <td></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
import moment from 'moment';
export default {
    name: 'notice',
    components: {
        compHeader,
        Header2,
        Footer
    },
    data() {
        return {
            notice: ''
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

        axios.noticeAll().then((value) => {
            console.log(value.data.notice)

            if (value.status == 200) {

                this.notice = value.data.notice.filter(x => {
                    let dataewsss = new Date(x.data);
                    return x.data = moment(dataewsss).format('YYYY-MM-DD');
                });
                console.log(this.notice);
            } else {
                this.notice = 0;
            }
        }).catch((err) => {
            this.notice = 0;
            console.log(err);
        })
    }
}
</script>

<style>

</style>
