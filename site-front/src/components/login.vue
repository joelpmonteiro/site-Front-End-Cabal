<template>
<div>
    <div id="modal-register" class="modal_div">
        <div class="modal_close">
            <div class="closeButton">
                <span></span>
                <span></span>
            </div>
        </div>
        <!--modal_close-->
        <h1>LOGIN</h1>
        <form class="modalForm" action="#" @submit.prevent="login" method="post">
            <div class="formGroup">
                <span class="formGroup-name">Nickname</span>
                <input id="login" type="text" name="login" v-model.lazy="$v.user.$model" @change="$v.user.$touch()">
                <div class="errorGroup error" v-if="!$v.user.required">
                    <span class="color-red">Error!</span> usuario Invalido. Para logar corretamente tente outro usuario.
                </div>
                <div class="errorGroup error" v-if="!$v.user.minLength">
                    <span class="color-red">Error!</span> Esse Usuario é inexistente devido ao tamanho do nick.
                </div>
            </div>
            <div class="formGroup">
                <span class="formGroup-name">Password</span>
                <input id="password" type="password" name="pass" v-model="$v.password.$model" @change="$v.password.$touch()">
                <div class="errorGroup error" v-if="!$v.password.minLength">
                    <span class="color-red">Error!</span> A senha nao é compativel com o usuario.
                </div>
            </div>
            <div class="flex-s-c formGroup-button recoveryPassword">
                <router-link to="recovery/password" class="lost-pass" @click.prevent="recoveryPasswordFunc">Loast Password</router-link>
                <!-- <a href="" class="lost-pass">Loast password ?</a> -->
                <button class="button-small">Login</button>
            </div>
        </form>
    </div>
    <div id="overlay"></div>
</div>
</template>

<script>
/* eslint-disable */
import {
    required,
    minLength
} from "vuelidate/lib/validators/";
import axios from '../services/servicesAxios.js';
import {
    EV
} from '../services/middleware/eventBus'
import dom from '../services/dom';

export default {
    name: 'Login',
    data() {
        return {
            user: "",
            password: "",
            isLogin: false,
            auth: false,
            recoveryPasswordVar: false
        }
    },
    validations: {
        user: {
            required,
            minLength: minLength(5)
        },
        password: {
            required,
            minLength: minLength(4)
        }
    },
    methods: {
        emitEvent() {
            EV.emit('sample-event', this.isLogin, this.auth)
        },
        emitEventActivation() {
            EV.emit('activation', this.auth, this.recoveryPasswordVar)
        },
        emitEventUser(user) {
            EV.emit('user', this.user)
        },
        emitEventRecovery() {
            EV.emit('recovery', this.auth, this.recoveryPassword)
        },
        hiddenDivLogin() {
            var modal = document.querySelector('.modal_div');
            var overlay = document.querySelector('#overlay');

            modal.style.display = 'none';
            modal.style.top = '15%';
            modal.style.opacity = '0';
            overlay.style.display = 'none'

        },
        recoveryPasswordFunc() {
            this.recoveryPasswordVar = true;
            console.log('entrou no recovery')
            this.emitEventRecovery(false, 2)
        },
        login() {
            // if ((!this.$v.user.required || !this.$v.user.minLength)) {
            //     this.$swal('error', 'Erro nas credenciais de Login, tente Novamente', 'error')
            // } else {
            axios.authLogin({
                id: this.user,
                pass: this.password
            }).then(value => {
                if (value.status === 200) {
                    setTimeout(() => {
                        if ((value.data.ID[0].AuthType == 4 && value.data.ID[0].actived == 0)) {
                            this.auth = true;

                        } else {
                            this.isLogin = true;

                        }
                        this.emitEvent()
                        this.$swal('Sucesso', value.data.mensagem, 'success').then((value) => {
                            this.hiddenDivLogin();
                            this.emitEventActivation()
                            this.emitEventUser(this.user)
                            // this.$router.push({
                            //     name: "pending"
                            // });
                        })
                    }, 500);

                } else {
                    this.$swal('error', 'Erro nas credenciais de Login, tente Novamente', 'error')
                }
            }).catch((err) => {
                if (err) {
                    this.$swal('error', 'Erro nas credenciais de Login, tente Novamente', 'error')
                }
            })

            //}
        }
    },
    mounted() {
        let modalClose = document.querySelector('.modal_close');
        let modalRegister = document.querySelector('#modal-register');
        var overlay = document.querySelector('#overlay');

        modalClose.addEventListener('click', () => {
            modalRegister.style.display = 'none';
            modalRegister.style.top = '15%';
            modalRegister.style.opacity = '0';
            overlay.style.display = 'none'

        })

    }
}
</script>

<style>

</style>
