<template>
    <section>
        <h1>Here is a list of all the students in our school.</h1>
        <Board />
    </section>
</template>

<script>
import Board from '../components/Board.vue';




    export default {
        name: 'Allstudent',
        data() {
            return {

            }
        },
        components: {
            Board
        }





    }
</script>

<style scoped>
section {
    border: 3px solid red;
    width: 70%;
    height: auto;
    margin: 50px auto;
}
</style>