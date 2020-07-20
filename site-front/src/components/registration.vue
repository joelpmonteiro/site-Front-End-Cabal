<template>
<div class="regBlock" id="register" >
    <div class="container" v-if="this.registerPending === false">
        <h1>REGISTRATION</h1>
        <form class="registration" action="#" @submit.prevent="registration" method="post">
            <div class="formGroup">
                <div class="errorGroup error" v-if="$v.accountId.$dirty && $v.accountId.$invalid">
                    <span class="color-red">Error!</span> usuario Invalido. Para se registrar preencha os campos corretamente.
                </div>
                <div class="errorGroup error" v-if="!$v.accountId.minLength">
                    <span class="color-red">Error!</span> O nome de usuario deve ter no minino 5 caracteres.
                </div>
                <span class="formGroup-name">Nickname</span>
                <input type="text" name="login" v-model.trim="$v.accountId.$model" @change="$v.accountId.$touch()">
            </div>

            <div class="formGroup formGroup-2">

                <div>
                    <span class="formGroup-name">Password</span>
                    <input type="password" name="pass" v-model.trim="$v.password.$model" @change="$v.password.$touch()">
                    <div class="errorGroupPassword error" v-if="$v.password.$dirty && $v.password.$invalid">
                        <span class="color-red" v-if="!$v.password.required">Error!</span> digite uma senha valida.
                    </div>
                    <div class="errorGroupPassword error" v-if="!$v.password.minLength">
                        <span class="color-red">Error!</span> A senha deve ter no minino 5 caracteres.
                    </div>
                </div>
                <div>
                    <span class="formGroup-name">Repeat password</span>
                    <input type="password" name="pass-re" v-model.trim="$v.rePassword.$model" @change="$v.rePassword.$touch()">

                    <div class="errorRePassword error" v-if="$v.rePassword.$dirty && $v.rePassword.$invalid">
                        <span class="color-red" v-if="!$v.password.required">Error!</span> digite uma senha valida.
                    </div>
                    <div class="errorRePassword error" v-if="!$v.rePassword.sameAsPassword">
                        <span class="color-red">Error!</span> A senha deve ser igual.
                    </div>
                </div>
            </div>

            <div class="formGroup">
                <!-- <span class="formGroup-name">Telefone:</span> -->
                <vue-tel-input v-model="phone" v-bind="bindProps"></vue-tel-input>
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
                <button>Registration</button>
                <div class="agreement">
                    By registering on the site, you automatically accept the <br> <a href="">User Agreement</a>
                </div>
            </div>
        </form>
        <div class="paralax paralax-hero">
            <div class="hero-pal"></div>
        </div>
    </div>
    <pendingResgister v-else/>
    <!--container-->
</div>
<!--regBlock-->
</template>

<script>
/* eslint-disable */
import {VueTelInput} from 'vue-tel-input';
import pendingResgister from './PendingRegister';
import {
    required,
    minLength,
    sameAs,
    email,
} from "vuelidate/lib/validators/";
import axios from '../services/servicesAxios.js';

export default {
    name: 'registration',
    components: {
        VueTelInput,
        pendingResgister
    },
    data() {
        return {
            accountId: '',
            password: '',
            rePassword: '',
            email: '',
            phone: '',
            registerPending: false,
            bindProps: {
                mode: "international",
                defaultCountry: "BR",
                disabledFetchingCountry: false,
                disabled: false,
                disabledFormatting: false,
                placeholder: "Enter a phone number",
                required: true,
                enabledCountryCode: false,
                enabledFlags: true,
                preferredCountries: ["BR", "AU"],
                onlyCountries: [],
                ignoredCountries: [],
                autocomplete: "off",
                name: "telephone",
                maxLen: 25,
                wrapperClasses: "vuephone",
                inputClasses: "",
                dropdownOptions: {
                    disabledDialCode: true
                },
                inputOptions: {
                    showDialCode: true
                }
            }
        }
    },
    validations: {
        accountId: {
            required,
            minLength: minLength(5),
        },
        password: {
            required,
            minLength: minLength(4),
        },
        rePassword: {
            required,
            sameAsPassword: sameAs('password'),
        },
        email: {
            required,
            email,
        },
        phone: {
            required,
        },
    },
    methods: {
        registration() {
            axios.register({
                id: this.accountId,
                pass: this.password,
                email: this.email,
                phone: this.phone
            }).then(response => {
                if (response.status == 201) {
                    this.$swal('Sucesso', response.data.mensagem, 'success')
                    this.registerPending = true;
                    this.email = '';
                } else {
                    this.$swal('error', response.data.msg, 'error')

                }
            })
        },
    },
    mounted() {
        // let test = document.querySelector('.vue-tel-input');
        // test.classList.add('vuephone')
    },
}
</script>

<style scoped>
.errorGroupPassword {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzIwNTE0RERDRkFBMTFFOTg0ODZCRkZCNUFGMDdENEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzIwNTE0REVDRkFBMTFFOTg0ODZCRkZCNUFGMDdENEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMjA1MTREQkNGQUExMUU5ODQ4NkJGRkI1QUYwN0Q0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMjA1MTREQ0NGQUExMUU5ODQ4NkJGRkI1QUYwN0Q0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkHzOBMAAAGySURBVHjahJTPKwRhGMd3NsVlrBTKr4vFVYws2mRRxCqJA24Om1wc/Amc3SiO62TLgT04SKvU0mK5sEoutMpVScT4PvqO3ta8s299eubd95nPPvPO845h27avcJx3jvcjTIMu0Mifn8AZSFiZvcPCewxVBEEDwjoY83mPA7AI4cM/ESTtCClgcu0UJEGO81YwCno4fwcRyNJ/IkiqcP0ISsErmEdCwq0U5C4hrHEqVdQjN+/nDzuUvIE2D0ktwoy6NWD39yJjRUOIaS5EIUlqJEEJIADy3MsVLkekohgnl0UkGUo+QR9yV5UCYiIKcbLtIbkAFeBDWgKSey7HGS0R1XFy5yJpZiXlrEQkWSXFuaemRNcokDSxEpOVhCC50uX7uXEyWlw21tRU4owg44ufbS9jlpJqStQ90VUy57woEW05GwbJMrs7oDxOVvPoYYQwp5tOZ59g0qvk3YBJSHIaiVR9CyrZNh1OZ0+BbyU37iEZRrimRMZE4aHtRjgCZUw4Bvs8tLZyaAe4/gUG8Ycpt8+IvPINMFTkMyI3L6hVG5oP2wg/bJbSsM98mwm3o/QjwADhRK15FmQ7IQAAAABJRU5ErkJggg==) left 20px top 17px no-repeat;
    background-color: rgba(16, 16, 16, 0.9);
    padding: 17px 0 0 50px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
    line-height: 1.5;
    font-size: 13px;
    position: absolute;
    /* left: 100%; */
    right: 100%;
    top: -9%;
    min-width: 200px;
    color: #fff;
}

.errorRePassword {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzIwNTE0RERDRkFBMTFFOTg0ODZCRkZCNUFGMDdENEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzIwNTE0REVDRkFBMTFFOTg0ODZCRkZCNUFGMDdENEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMjA1MTREQkNGQUExMUU5ODQ4NkJGRkI1QUYwN0Q0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMjA1MTREQ0NGQUExMUU5ODQ4NkJGRkI1QUYwN0Q0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkHzOBMAAAGySURBVHjahJTPKwRhGMd3NsVlrBTKr4vFVYws2mRRxCqJA24Om1wc/Amc3SiO62TLgT04SKvU0mK5sEoutMpVScT4PvqO3ta8s299eubd95nPPvPO845h27avcJx3jvcjTIMu0Mifn8AZSFiZvcPCewxVBEEDwjoY83mPA7AI4cM/ESTtCClgcu0UJEGO81YwCno4fwcRyNJ/IkiqcP0ISsErmEdCwq0U5C4hrHEqVdQjN+/nDzuUvIE2D0ktwoy6NWD39yJjRUOIaS5EIUlqJEEJIADy3MsVLkekohgnl0UkGUo+QR9yV5UCYiIKcbLtIbkAFeBDWgKSey7HGS0R1XFy5yJpZiXlrEQkWSXFuaemRNcokDSxEpOVhCC50uX7uXEyWlw21tRU4owg44ufbS9jlpJqStQ90VUy57woEW05GwbJMrs7oDxOVvPoYYQwp5tOZ59g0qvk3YBJSHIaiVR9CyrZNh1OZ0+BbyU37iEZRrimRMZE4aHtRjgCZUw4Bvs8tLZyaAe4/gUG8Ycpt8+IvPINMFTkMyI3L6hVG5oP2wg/bJbSsM98mwm3o/QjwADhRK15FmQ7IQAAAABJRU5ErkJggg==) left 20px top 17px no-repeat;
    background-color: rgba(16, 16, 16, 0.9);
    padding: 17px 20px 17px 50px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
    line-height: 1.5;
    font-size: 13px;
    position: absolute;
    left: 100%;
    min-width: 330px;
    color: #fff;
    margin-left: 5px;
    top: -21px;
}
</style>
