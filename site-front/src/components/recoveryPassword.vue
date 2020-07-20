<template>
<div class="container">
    <h1>Account Activation</h1>
    <form class="registration" action="#" @submit.prevent="recoveryPassword" method="post">
        <div class="formGroup">
            <!-- <div class="errorGroup error" v-if="$v.actCode.$invalid ">
                    <span class="color-red">Error!</span> Wrong activation code.
                </div> -->
            <div class="errorGroup error" v-if="!$v.user.minLength">
                <span class="color-red">Error!</span> Invalid activation code..
            </div>
            <span class="formGroup-name">Conta</span>
            <input type="text" name="id" v-model="$v.user.$model" @change="$v.user.$touch()">
        </div>

        <div class="formGroup">
            <!-- <div class="errorGroup error" v-if="$v.actCode.$invalid ">
                    <span class="color-red">Error!</span> Wrong activation code.
                </div> -->
            <div class="errorGroup error" v-if="!$v.newPass.minLength">
                <span class="color-red">Error!</span> Invalid activation code..
            </div>
            <span class="formGroup-name">Nova Senha</span>
            <input type="password" name="newPass" v-model="$v.newPass.$model" @change="$v.newPass.$touch()">
        </div>

        <div class="formGroup">

            <span class="formGroup-name">E-mail</span>
            <input type="text" name="mail" v-model.trim="$v.email.$model" @change="$v.email.$touch()">
            <div class="errorGroupPassword error" v-if="$v.email.$dirty && $v.email.$invalid">
                <span class="color-red" v-if="!$v.email.required">Error!</span> digite um E-mail valido.
            </div>
            <div class="errorGroupPassword error" v-if="!$v.email.email">
                <span class="color-red" v-if="!$v.email.email">Error!</span> digite um E-mail valido.
            </div>
        </div>

        <div class="regButton flex-c">
            <button>Recuperar Senha</button>
        </div>
    </form>
    <div class="paralax paralax-hero">
        <div class="hero-pal"></div>
    </div>
</div>
<!--container-->
</template>

<script>
/* eslint-disable */
import {
    required,
    minLength,
    email,
} from "vuelidate/lib/validators/";
import {
    EV
} from '../services/middleware/eventBus'
import axios from '../services/servicesAxios.js';

export default {
    name: 'recoveryAccount',
    validations: {
        user: {
            required,
            minLength: minLength(5),
        },
        newPass: {
            required,
            minLength: minLength(5),
        },
        email: {
            required,
            email,
        },
    },
    data() {
        return {
            user: '',
            newPass: '',
            email: ''
        }
    },
    methods: {
        recoveryPassword() {
            if (this.user === '' || this.email === '' || this.newPass === '') {
                this.$swal('Error', 'Por favor para mudar a senha é preciso preencher os dados Corretamente', 'error')
            } else {
                axios.recoveryPasswordAccount({
                    id: this.user,
                    email: this.email,
                    password: this.newPass
                }).then((value) => {
                    if (value.status == 200) this.$swal('Sucesso', value.data.mensagem, 'success')
                    else this.$swal('error', response.data.mensagem, 'error')

                }).catch((err) => {
                    this.$swal('error', 'Erro ao Alterar a Senha, Usuario inválido, verifique o ID da conta e o E-mail Digitado.', 'error')
                })
            }
        }
    },
}
</script>

<style>

</style>
