<template>
    <section>
        <h1>for student board</h1>
        <div class="showboard"></div>
        <div  v-for="student in students" :key="student.id">
            <Display :student="student"/>
        </div>
    </section>
</template>

<script>
import Display from './Display.vue';
import { mapGetters, mapActions } from 'vuex';

    export default {
    name: "Board",
    data() {
        return {
            displayFull: false
        }
    },
    computed: {
        ...mapGetters("student", ["students"])
    },
    components: {
        Display
    },
    methods: {
        ...mapActions("student", ["getStudents"])     
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