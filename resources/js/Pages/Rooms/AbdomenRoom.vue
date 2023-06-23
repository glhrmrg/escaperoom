<template>
    <Head title="Abdomen" />
    <AuthenticatedLayout>
        <div class="main">
            <div>
                <img @click="loadQuestion" src="../Imgs/cacos.png" alt="cacos" class="glass-obj">
            </div>
            <div>
                <img @click="loadQuestion" src="../Imgs/quadro.png" alt="quadro" class="frame-obj">
            </div>
            <div>
                <img @click="loadQuestion" src="../Imgs/radio.png" alt="radio" class="radio-obj">
            </div>
            <div v-if="question" class="question-container">
                <p class="question-text">{{ question.question }}</p>
                <ul class="options-list">
                    <li v-for="option in options" :key="option.id">
                        <button class="option-button" @click="checkAnswer(option)">{{ option.option }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, router } from "@inertiajs/vue3";
import { ref } from "vue";
import {useToast} from "vue-toastification";
import store from "@/store.js";

export default {
    components: {
        AuthenticatedLayout,
        Head,
    },
    setup() {
        const question = ref(null);
        const options = ref([]);
        const message = ref('');
        const correctAnswers = ref(0);
        const toast = useToast();
        const difficulty = store.difficulty;

        async function loadQuestion() {
            try {
                const response = await axios.get(`/abdomen-room/${difficulty}/question`);
                const {question: loadedQuestion, options: loadedOptions} = response.data;

                question.value = loadedQuestion;
                options.value = loadedOptions;
                message.value = '';
            } catch (error) {
                console.log(error);
            }
        }
        function checkAnswer(option) {
            if (option.is_correct) {
                toast.info('Você acertou! Faltam ' + (3 - correctAnswers.value - 1) + ' questões para sair da salas!');
                question.value = null;
                options.value = [];
                correctAnswers.value++;

                axios.post('/score/add')
                    .then(response => {
                        store.addScore(response.data.score)
                        isOver();
                    }).catch(error => {
                    console.log(error);
                });

                if (correctAnswers.value === 3) {
                    toast.info('Parabéns! Você conseguiu sair da sala!');
                    router.visit('skeletal-muscle-room');
                }

            } else {
                toast.info('A resposta está errada! Você perdeu 2 pontos!');
                axios.post('/score/subtract')
                    .then(response => {
                        store.subtractScore(response.data.score)
                        isOver();
                    }).catch(error => {
                    console.log(error);
                });
            }
        }

        function isOver() {
            if (store.state.score < 0) {
                toast.info('Você perdeu todos os pontos! Você será redirecionado para a tela inicial!');
                setTimeout(() => {
                    router.visit('/dashboard')
                }, 2000);
            }
        }

        return {
            question,
            options,
            message,
            correctAnswers,
            loadQuestion,
            checkAnswer,
        };
    },
};

</script>

<style scoped>
.main {
    background-image: url('../Imgs/recepção.jpeg');
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

.question-container {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 700px;
    height: 500px;
}

.question-text {
    font-size: 18px;
    margin-bottom: 10px;
}

.options-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.option-button {
    background-color: #e0e0e0;
    border: none;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;
    text-align: left;
    margin-top: 5px;
}

.option-button:hover {
    background-color: #d2d2d2;
}

.radio-obj {
    position: relative;
    bottom: 24px;
    width: 90px;
    left: -168px;
}
.frame-obj {
    position: relative;
    bottom: 13px;
    width: 124px;
    left: 323px;
}
.glass-obj {
    position: relative;
    bottom: -531px;
    width: 70px;
    left: -529px;
}


</style>
