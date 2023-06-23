<template>
    <Head title="Menu" />
    <AuthenticatedLayout>
        <div class="main-container">
            <div class="main-menu">
                <h1 class="main-menu-title">Dificuldade</h1>
                <div class="main-menu-buttons">
                    <button class="main-menu-button" @click="selectDifficulty(1)">Fácil</button>
                    <button class="main-menu-button" @click="selectDifficulty(2)">Media</button>
                    <button class="main-menu-button" @click="selectDifficulty(3)">Difícil</button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, router } from "@inertiajs/vue3";
import store from "@/store.js";

export default {
    components: {
        AuthenticatedLayout,
        Head,
        Link,
    },
    setup() {
        const selectDifficulty = (value) => {
            store.difficulty = value;
            redirectToRoom()
        };
        const redirectToRoom = () => {
            if (store.difficulty === 1) {
                router.visit('/chest-room');
            } else if (store.difficulty === 2) {
                router.visit('/chest-room');
            } else if (store.difficulty === 3) {
                router.visit('/chest-room');
            }
        };
        return {
            selectDifficulty,
            redirectToRoom,
        }
    },
}


</script>

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
