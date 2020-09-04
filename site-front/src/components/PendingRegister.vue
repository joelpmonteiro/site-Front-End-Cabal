<template>
<div class="container">
    <h1>Account Activation</h1>
    <form class="registration" action="#" @submit.prevent="activeCodeAccount" method="post">
        <div class="formGroup">
            <!-- <div class="errorGroup error" v-if="$v.actCode.$invalid ">
                    <span class="color-red">Error!</span> Wrong activation code.
                </div> -->
            <div class="errorGroup error" v-if="!$v.actCode.minLength">
                <span class="color-red">Error!</span> Invalid activation code..
            </div>
            <div class="formGroup">
                <span class="formGroup-name">User</span>
                <input type="text" name="user" min="4" v-model="$v.sendUser.$model" @change="$v.sendUser.$touch()">
            </div>
            <br>
            <div class="formGroup">

                <span class="formGroup-name">Activation code</span>
                <input type="text" name="login" min="4" maxlength="5" v-model="$v.actCode.$model" @change="$v.actCode.$touch()">
            </div>
        </div>

        <div class="regButton flex-c">
            <button>Account Activation</button>
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
} from "vuelidate/lib/validators/";
import {
    EV
} from '../services/middleware/eventBus'
import axios from '../services/servicesAxios.js';

export default {
    name: 'PendingRegister',
    validations: {
        actCode: {
            required,
            minLength: minLength(4),
        },
        sendUser: {
            required,
            minLength: minLength(4),
        },
    },
    data() {
        return {
            actCode: '',
            sendUser: ''
        }
    },
    methods: {
        activeCodeAccount() {
            //this.sendUser = this.$parent.sendUser;
            console.log(this.$parent.sendUser)
            axios.activationAccount({
                activKey: this.actCode,
                ID: this.sendUser
            }).then((value) => {
                if (value.status == 200) {
                    this.$swal('Success', value.data.msg, 'success')
                    this.$parent.isActivation = false;
                    this.router.push({name:'home'})
                } else this.$swal('error', value.data.msg, 'error')

            }).catch((err) => {
                this.$swal('error', 'Erro na Ativação da Conta, Verifique se o Codigo está Correto', 'error')
                this.actCode = ''
                //console.log('teste> ',err)
            })
        }
    },
}
</script>

<style>

</style>
