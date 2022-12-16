<template>
    <section>
        <h1>for student board</h1>
        <Full v-show="showClick" :popStudent="student"/>
        <div  v-for="student in students" :key="student.id">
            <Display v-on:show-click="clickShow(student.id)" :student="student"/>
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
            this.getStudent(id)
        }
    },
    async created() {
        this.students = await this.getStudents();
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
section {
    border: 4px solid lightcoral;
    height: 70vh;
    width: 500px;
}

.showboard {
    width: 800px;
    height: 500px;
    border: 4px solid red;
    border-radius: 10px;
    background-color: aquamarine;
    position: absolute;
    opacity: 0.7;
}
</style>