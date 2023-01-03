<template>
    <section class="main">
        <!-- <h1>Our students in no particular order.</h1> -->
        <!-- <Full v-show="showClick" :popStudent="student" /> -->
        <div  v-for="student in students" :key="student.id">
            <Display v-on:show-click="clickShow(student.id)" :student="student" />
        </div>
    </section>
</template>

<script>
import Display from './Display.vue';
import Full from './Full.vue'
import { mapGetters, mapActions } from 'vuex';

    export default {
    name: "Board",
    data() {
        return {
            showClick: false
        }
    },
    computed: {
        ...mapGetters("student", ["students", "student"])
    },
    components: {
        Display,
        Full
    },
    methods: {
        ...mapActions("student", ["getStudents", "getStudent"]),
        clickShow(id) {
            this.showClick = true;
            this.$emit("show-pop", id)
            console.log("pepepepe" + " " + id)
            // this.getStudent(id)
        }
    },
    emits: ["show-pop"],
    async created() {
        this.students = await this.getStudents();
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.main {
    border: 2px solid green;
    height: auto;
    width: 85%;
    margin: 80px auto 150px;
}


@media screen and (max-width: 500px) {
    .main {
        width: 95%;
        margin: 60px auto 100px;
    }
}


</style>