<template>
    <section>
        <Navbar />
        <Full :popStudent="student" />
        <h1>Here is a list of all the students in CFC-SCHOOL.</h1>
        <Board v-on:show-pop="popShow(student.id)" />
        <Footbar />
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Full from '../components/Full.vue';
import Board from '../components/Board.vue';
import Footbar from '../components/Footbar.vue';
import { mapGetters, mapActions } from 'vuex';




    export default {
        name: 'Allstudent',
        data() {
            return {

            }
        },
        components: {
            Navbar,
            Board,
            Full,
            Footbar
        },
        computed: {
            ...mapGetters("student", ["student"])
        },
        methods: {
            ...mapActions("student", ["getStudent"]),
            popShow(id) {
                console.log("lalalala" + " " + id)
                // this.getStudent(id)
            }
        }





    }
</script>

<style scoped>
section {
    border: 1px solid red;
    /* width: 90%; */
    height: auto;
    /* margin: 50px auto; */
    /* padding: 5px; */
}
section h1 {
    margin-top: 120px;
    font-size: 35px;
}


@media screen and (max-width: 500px) {
    section h1 {
        margin-top: 80px;
        font-size: 30px;
    }
}


</style>