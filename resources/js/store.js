import { reactive } from 'vue';

const state = reactive({
    difficulty: null,
    score: 0,
});

const addScore = (points) => {
    state.score += points;
    setScore(points);
};

const subtractScore = (points) => {
    state.score -= points;
    setScore(points);
};

const updateScore = (points) => {
    state.score = points;
    setScore(points);
};

const setScore = (points) => {
    state.score = points;
};

export default { state, addScore, subtractScore, updateScore, setScore };
