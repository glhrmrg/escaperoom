<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});


function logout() {
    axios.post('/logout').then(() => {
        window.location = '/register';
    });
}

</script>

<template>
    <Head title="Welcome" />
        <div class="main-container">
            <div class="main-menu">
                <h1 class="main-menu-title">Escape Room: Radiologia</h1>
                <div class="main-menu-buttons">
                    <button class="main-menu-button" v-if="canLogin">
                        <a href="login">Entrar</a>
                    </button>
                    <button class="main-menu-button" v-if="canRegister" @click="logout">
                        <a href="register">Registrar</a>
                    </button>
                    <button class="main-menu-button">
                        <a href="https://forms.gle/6Sq1QAMNbSStZDsQ6">Feedback</a>
                    </button>
                </div>
            </div>
        </div>
</template>

<style>
body {
    font-family: 'Wix Madefor Text', sans-serif;
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.main-container {
    background-image: url('./Imgs/fundo-menu.jpeg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 900px;
    width: 1270px;
    background-color: #555;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main-menu {
    background-color: #708090;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vh;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.75);
}

.main-menu-title {
    color: #fff;
    font-size: 2em;
    text-shadow: 2px 2px #2F4F4F;
    user-select: none;
}

.main-menu-buttons {
    display: flex;
    flex-direction: column;
}

.main-menu-button {
    background-color: #818975;
    color: #ffffff;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 170px;
    font-size: 1.2em;
}

.main-menu-button:hover {
    background-color: #999;
}
</style>
