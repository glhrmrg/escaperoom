<template>
    <Head title="Músculo esquelético" />
    <AuthenticatedLayout>
        <div class="main">
            <div>
                <img @click="loadQuestion" src="../Imgs/telescopio.png" alt="telescopio" class="telescope-obj">
            </div>
            <div>
                <img @click="loadQuestion" src="../Imgs/celular.png" alt="celular" class="cellphone-obj">
            </div>
            <div>
                <img @click="loadQuestion" src="../Imgs/caderno.png" alt="caderno" class="notebook-obj">
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
import { useToast } from "vue-toastification";
import { ref } from "vue";

export default {
    components: { AuthenticatedLayout, Head, router },
    setup() {
        const question = ref(null);
        const options = ref([]);
        const message = ref('');
        const correctAnswers = ref(0);
        const toast = useToast();
        async function loadQuestion() {
            try {
                const response = await axios.get('/skeletal-muscle-room/question');
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
            } else {
                toast.info('Você errou! Tente novamente!');
            }
            if (correctAnswers.value === 3) {
                toast.info('Parabéns! Você conseguiu sair da sala!');
                router.push('/rooms');
            }
        }
        return {
            question,
            options,
            message,
            loadQuestion,
            checkAnswer,
            correctAnswers
        }
    }
}
</script>

<style scoped>
.main {
    background-image: url('../Imgs/terraço.jpeg');
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

.telescope-obj {
    position: relative;
    display: flex;
    width: 248px;
    top: 200px;
    left: -245px;
}

.cellphone-obj {
    position: relative;
    width: 31px;
    display: flex;
    top: 138px;
    left: 395px;
}

.notebook-obj {
    position: relative;
    display: flex;
    width: 100px;
    top: 278px;
    left: -253px;
}

</style>
