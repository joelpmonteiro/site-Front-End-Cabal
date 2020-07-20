<template>
<div class="container">
    <div class="content">
        <h2 class="server-title"><span>Informações de Nações</span></h2>
        <div class="serversBlock flex-s">
            <div class="servers">
                <div class="server-icon server-icon_1"><img src="../assets/images/server-icon_Capella.png" alt=""></div>
                <h2 style="color:#4e9cea;">Capella</h2>
                <div class="row-container">
                    <div class="serverIn">
                        <p>{{this.charInstatWar.capellaNation.capella}}</p> <span>Players</span>
                    </div>
                    <div class="serverIn">
                        <p>{{this.charInstatWar.capellaNation.leng}}</p> <span>Vitórias</span>
                    </div>
                    <div class="serverIn">
                        <p style="font-size:15px">{{this.charInstatWar.capellaNation.EndDateTime}}</p> <span>Ultima Vitória</span>
                    </div>
                    <div class="serverIn">
                        <p>{{this.charInstatWar.capellaNation.instantWar}}</p> <span>Último Score</span>
                    </div>
                </div>
            </div>
            <div class="servers">
                <div class="server-icon server-icon_2"><img src="../assets/images/server-icon_2Procyon.png" alt=""></div>
                <h2 style="color:#982b27;">Procyon</h2>
                <div class="row-container">
                    <div class="serverIn">
                        <p>{{this.charInstatWar.procyonNation.procyon}}</p> <span>Players</span>
                    </div>
                    <div class="serverIn">
                        <p>{{this.charInstatWar.procyonNation.leng}}</p> <span>Vitórias</span>
                    </div>
                    <div class="serverIn">
                        <p style="font-size:15px">{{this.charInstatWar.procyonNation.EndDateTime}}</p> <span>Ultima Vitória</span>
                    </div>
                    <div class="serverIn">
                        <p>{{this.charInstatWar.procyonNation.instantWar}}</p> <span>Último Score</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--content-->
</div>
<!--container-->
</template>

<script>
/* eslint-disable */

import axios from '../services/servicesAxios';
import moment from 'moment';

export default {
    name: 'center',
    data() {
        return {
            nationCapella: {},
            nationProcyon: '',
            charInstatWar: {
                capellaNation: '',
                procyonNation: ''
            }
        }
    },
    methods: {
        searchNation() {}
    },
    mounted() {
        axios.searCharacterNation(1).then((value) => {
            this.nationCapella = value.data
            console.log(this.nationCapella.char.length)

            let formatData = new Date(this.nationCapella.char[0].EndDateTime)
            let dateeeNew = moment(formatData).utc().format('DD-MM-YYYY HH:mm')
            console.log(dateeeNew)
            this.charInstatWar.capellaNation = {
                EndDateTime: dateeeNew,
                capella: this.nationCapella.char[0].char,
                leng: this.nationCapella.char.length,
                instantWar: this.nationCapella.instantWar[0].Score
            };
            console.log(this.charInstatWar.capellaNation.capella)

            // console.log(this.nationCapella)
            // console.log(this.char.capellaNation.instantWar.Score)
            // this.char.capella = {
            //     EndDateTime: this.nationCapella[0].EndDateTime,
            // }

        }).catch((err) => {
            console.log(err)
        })

        axios.searCharacterNation(2).then((value) => {
            this.nationProcyon = value.data;

            let formatData = new Date(this.nationProcyon.char[0].EndDateTime)
            let dateeeNew = moment(formatData).utc().format('DD-MM-YYYY HH:mm')

            this.charInstatWar.procyonNation = {
                EndDateTime: dateeeNew,
                procyon: this.nationProcyon.char[0].char,
                leng: this.nationProcyon.char.length,
                instantWar: this.nationProcyon.instantWar[0].Score
            };
            // for (let index = 0; index < 1; index++) {
            //     console.log(this.nationProcyon[index])
            //     this.char.procyon = this.nationProcyon[index].char

            // }

        }).catch((err) => {
            console.log(err)
        })
        console.log(this.char)

    }
}
</script>

<style>

</style>
