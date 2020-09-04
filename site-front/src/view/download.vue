<template>
<div>

    <compHeader />
    <Header2 />

    <div class="container">
        <div class="content">
            <div class="page-title">
                <h1>Download Client</h1>
            </div>
            <!--page-title-->
            <div class="block">
                <div class="block-title">
                    <h2><span>Download client game</span></h2>
                </div>
                <div class="flex downloadBlock-flex">
                    <div class="downloadBlock">
                        <div class="downloadBlock-title">
                            File size: <span>3.63 GB</span>
                        </div>
                        <div class="flex-c-c">
                            <a  v-bind:href="download.link" class="downloadBlock-block" v-for="download in downloadArray.downloads" :key="download.id" target="blank">
                                <img src="../assets/images/drive-icon.png" alt="" v-if="download.nomeServidor === 'Google Drive'">
                                <img src="../assets/images/mega-icon.png" alt="" v-if="download.nomeServidor === 'Mega'">
                                <img src="../assets/images/torrent-icon.png" alt="" v-if="download.nomeServidor === 'Utorrent'">
                                <span>{{download.nomeServidor}}</span>
                            </a>
                            <!-- <a href="" class="downloadBlock-block">
                                <img src="../assets/images/torrent-icon.png" alt="">
                                <span>Torrent File</span>
                            </a>
                            <a href="" class="downloadBlock-block">
                                <img src="../assets/images/dropbox-icon.png" alt="">
                                <span>Dropbox</span>
                            </a> -->
                        </div>
                    </div>
                    <div class="updateBlock">
                        <h3>Update client</h3>
                        <p>
                            If you have any problems with installing previous or other versions of the game client, please use this game update launcher.</p>
                        <a href="" class="button green-button">Download</a>
                    </div>
                </div>
            </div>
            <!--block-->
            <div class="block">
                <div class="block-title">
                    <h2><span>System requirements</span></h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Component parts</td>
                            <td>Min</td>
                            <td>Max</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Processor</td>
                            <td>2.8 Ghz</td>
                            <td>3.5 Ghz</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>4 GB</td>
                            <td>8 GB</td>
                        </tr>
                        <tr>
                            <td>Operation system</td>
                            <td>Windows 7 SP1</td>
                            <td>Windows 10</td>
                        </tr>
                        <tr>
                            <td>Graphics card</td>
                            <td>1 Gb</td>
                            <td>4 Gb</td>
                        </tr>
                        <tr>
                            <td>Conection</td>
                            <td>1 Mbps(ADSL)</td>
                            <td>2 Mbps(ADSL/Fibra)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--block-->
            <div class="block">
                <div class="block-title">
                    <h2><span>Drivers</span></h2>
                </div>
                <div class="flex-s drivers">
                    <img src="../assets/images/nvidia.jpg" alt="">
                    <img src="../assets/images/directx.jpg" alt="">
                    <img src="../assets/images/amd.jpg" alt="">
                </div>
            </div>
            <!--block-->
        </div>
        <!--content-->
    </div>
    <!--container-->
    <Footer></Footer>
</div>
</template>

<script>
/* eslint-disable */
import compHeader from '../components/Header';
import Header2 from '../components/componentsB/header2';
import Footer from '../components/footer';
import axios from '../services/servicesAxios.js';

export default {
    name: 'Download',
    components: {
        compHeader,
        Header2,
        Footer
    },
    data() {
        return {
            downloadArray: ''

        }
    },
    mounted() {
        $('.buttonTop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
        });
        let body = document.querySelector('body');
        body.setAttribute('class', 'page')

        axios.download().then((value) => {
            if (value.status === 200) {
                this.downloadArray = value.data
                console.log(this.downloadArray)
            } else {
                console.log('error');
            }
        })

    },
}
</script>

<style>

</style>
