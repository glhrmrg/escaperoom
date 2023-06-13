<template>
    <Head title="Corredor" />
    <AuthenticatedLayout>
        <div class="main">
            <Link href="head-room">
                <div class="door-container" @click="openDoor">
                </div>
            </Link>
        </div>
    </AuthenticatedLayout>

</template>

<script>
import {Head, Link} from '@inertiajs/vue3';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {useToast} from "vue-toastification";

export default {
    components: { AuthenticatedLayout, Head, Link },
    mounted() {

    },
    setup() {
        const toast = useToast();

        function openDoor() {
            toast.info('Você abre a porta e entra dentro de um quarto vazio.');
        }

        return {
            openDoor
        }
    }
}

</script>

<style scoped>
.main {
    background-image: url('../Imgs/corredor.jpeg');
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

.door-container {
    background-color: transparent;
    padding: 20px;
    border-radius: 5px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 120px;
    height: 240px;
    top: 50px;
    left: 10px;
    cursor: pointer;
}
</style>
