<template>
    <Head title="Tórax" />
    <AuthenticatedLayout>
        <div class="main">
            <div>
                <img @click="loadQuestion" src="../Imgs/exames.png" alt="exames" class="exam-folder-obj">
            </div>
            <div>
                <img @click="loadQuestion" src="../Imgs/tv.png" alt="tv" class="tv-obj">
            </div>
            <div>
                <img @click="loadQuestion" src="../Imgs/cadeado.png" alt="cadeado" class="cadeado-obj">
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
import {Head, router, Link} from '@inertiajs/vue3';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import store from "@/store.js";

export default {
    components: { AuthenticatedLayout, Head, Link, router },
    setup() {
       const question = ref(null);
       const options = ref([]);
       const message = ref('');
       const correctAnswers = ref(0);
       const toast = useToast();
       const difficulty = store.difficulty;
       async function loadQuestion() {
           try {
               const response = await axios.get(`/chest-room/${difficulty}/question`);
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
                toast.info('Você ganhou dois pontos!');
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
                    toast.info('Você consegue sair da sala e se depara com um corredor vazio!');
                    setTimeout(() => {
                        router.visit('/hallway')
                    }, 2000);
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
           difficulty,
           loadQuestion,
           checkAnswer
       }
    }
}


</script>

<style scoped>
.main {
    background-image: url('../Imgs/sala.jpg');
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

.exam-folder-obj {
    display: flex;
    width: 80px;
    position: relative;
    left: 110px;
    top: 480px;
}

.tv-obj {
    display: flex;
    position: relative;
    width: 200px;
    bottom: 190px;
    right: 450px;
}

.cadeado-obj {
    display: flex;
    position: relative;
    width: 50px;
    bottom: 50px;
    left: 24px;
}

</style>
