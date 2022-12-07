<template>
    <section>
        <h1>for student board</h1>
        <div  v-for="student in students" :key="student.id">
            <Display v-on:view="viewAll(student.id)" :student="student"/>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Display from './Display.vue';

    export default {
    name: "Board",
    data() {
        return {
            students: [],
            displayFull: false
        };
    },
    methods: {
        // async viewAll(id) {
        //     alert("view all working" + id);
        //     const res = await axios.get(`http://localhost:3000/api/v1/students/${id}`);
        //     this.fullStudent = await res.data
        //     this.displayFull = !this.displayFull;
        //     console.log(this.fullStudent)
        // }
    },
    async created() {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/students");
            this.students = await response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    components: {
        Display
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
</style>