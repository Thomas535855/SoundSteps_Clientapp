<script lang="ts">
import { defineComponent } from 'vue';
import InputField from '@/components/InputField.vue';
import Button from '@/components/Button.vue';

export default defineComponent({
    name: 'UserRegister',
    components: {
        InputField,
        Button
    },

    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },

    methods: {
        async registerUser() {
            try {
                const response = await fetch(`https://localhost:7295/Register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                });

                if (response.ok) {

                    console.log('registration succesful:');
                    location.reload();
                }
                else {
                    console.log('registration failed');
                }
            }
            catch (error) {
                console.log("An error occured: ", error);
            }
        }
    }
});
</script>

<template>
<div class="wrapper">    
    <div class="container">
        <form @submit="registerUser()">
            <div>
                <h1 class="title">Register</h1>
                <p class="input-type">Username:</p>
                <InputField type="text" v-model="username"></InputField>

                <p class="input-type">Email:</p>
                <InputField type="email" v-model="email"></InputField>

                <p class="input-type">Password:</p>
                <InputField type="password" v-model="password"></InputField>
                
                <Button text="Register"></Button>
            </div>
        </form>

        <p class="text">Already have an account? <router-link class="link" to="/">Sign in</router-link></p>
    </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

body {
    background-image: url(/src/assets/MusicBackground.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    font-family: var(--sds-typography-body-font-family);
}

.input-type {
    text-align: left;
}

.link {
    color: #000000;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.link:hover {
    color: #4f4f4f;
}

.container {
    margin-top: 2.5%;
    display: flex;
    text-align: center;
    width: 25%;
    padding: 2.5%;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
}
</style>