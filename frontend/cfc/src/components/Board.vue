<template>
    <section>
        <h1>for student board</h1>
        <div  v-for="student in students" :key="student.id" class="student">
            <div class="picture">
                <img />
            </div>
            <div class="about">
                <h4>Name: {{ student.name }}</h4>
                <h4>E-mail: {{ student.email }}</h4>
                <h4>department: {{ student.department }}</h4>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Board',
        data() {
            return {
                students: [],
            }
        },
        async created() {
                try {
                    const response = await axios.get("http://localhost:3000/api/v1/students");
                    this.students = await response.data
                } catch (error) {
                    console.log(error)
                }
            }



    }
</script>

<style scoped>
section {
    border: 4px solid lightcoral;
    height: 70vh;
    width: 500px;
}

.student {
    border: 2px solid green;
    width: 90%;
    height: 150px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.picture {
    width: 35%;
    height: 100%;
    border: 2px solid black;
}

.about {
    border: 2px solid brown;
    width: 60%;
    height: 100%;
    text-align: left;
    padding-left: 20px;
}
</style>