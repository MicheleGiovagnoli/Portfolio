<template>
    <div class="contact-form">
        <div class="container">
            <form id="contact" @submit.prevent="sendForm()">
                <h3>Contattami</h3>
                <!-- Nome Utente -->
                <fieldset>
                    <label for="name">Nome</label>&nbsp; <br />
                    <input type="text" id="name" maxlength="50" minlength="3" placeholder="Nome" v-model="name" required>
                    <p class="input-error" v-if="!name">{{ errors.name }}</p>
                </fieldset>
                <!-- Email Utente -->
                <fieldset>
                    <div class="input-container">
                        <label for="email">Email</label>&nbsp; <br />
                        <input type="email" id="email" max="50" v-model="email" placeholder=" email@esempio.com" required>
                        <p class="input-error last" v-if="!email">{{ errors.email }}</p>
                        <p class="input-error" v-if="!email.includes('@') || !checkValidEmail(email) || email.length < 3">
                            {{ errors.email_validation }}</p>
                    </div>
                </fieldset>
                <!-- Messaggio Utente -->
                <fieldset>
                    <textarea class="form-control" id="message" v-model="message" :class="{ 'is-invlaid': errors.message }"
                        placeholder="Testo" minlength="3" maxlength="500" required></textarea>
                    <div class="invalid-feedback" v-for="error in errors.message">
                        {{ error }}
                    </div>
                </fieldset>
                <!-- Bottone Invio dati -->
                <fieldset>
                    <button type="submit" :disabled="sending">
                        {{ sending ? 'Invio in corso...' : 'Invia messaggio' }}
                    </button>
                    <p class="input-error" v-if="!checkInputErrors()">
                    <p>
                        {{ errors.button }}
                    </p>
                    </p>
                </fieldset>
            </form>
            <!-- Risposta in caso di invio del messaggio  -->
            <div v-if="success && alert" class="alert alert-success my-success" role="alert">
                Messaggio Inviato, grazie!
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            sending: false,
            alert: false,
            errors: {
                name: '* Inserisci un nome valido',
                email: "* Inserire l'e-mail",
                email_validation: "* Inserire un email valida",
                button: '* Compilare correttamente tutti i campi'
            },
            error: {},
        }
    },
    methods: {
        sendForm() {

            this.success = false;
            this.alert = false;
            this.sending = true;
            this.error = {};

            axios.post(`${this.store.baseUrl}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }
            ).then(Response => {

                if (Response.data.success) {
                    //Resetto il form
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.success = true
                    this.alert = true
                    this.sending = false
                } else {
                    this.error = response.data.error;
                }

            }).catch(error => {
                this.sending = false;
            })
        },
        checkValidEmail(value) {
            return /^(?!.@.@)[^@].*[^@]$/.test(value);
        },
        checkInputErrors() {
            if (
                !this.name
                || !this.email
                || !this.email.includes('@')
                || !this.checkValidEmail(this.email)
                || email.length < 3
            ) {
                return false;
            } else {
                return true;
            }
        },
        closeAlert() {
            this.alert = true;
        }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}

body {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
    background: #4CAF50;
}

.alert {
    top: 10px;
}

.input-error {
    font-size: 0.7rem;
    font-weight: 400;
    color: rgba(219, 3, 3, 0.637);
}

.container {
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    padding-top: 100px;
}

#contact input[type="text"],
#contact input[type="email"],
#contact textarea,
#contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
    background: #F9F9F9;
    padding: 25px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
}

#contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
}

fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    color: black;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
}

#contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
}

#contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4CAF50;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
}

#contact button[type="submit"]:hover {
    background: #43A047;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
    text-align: center;
}

#contact input:focus,
#contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
}

::-webkit-input-placeholder {
    color: #888;
}

:-moz-placeholder {
    color: #888;
}

::-moz-placeholder {
    color: #888;
}

:-ms-input-placeholder {
    color: #888;
}
</style>