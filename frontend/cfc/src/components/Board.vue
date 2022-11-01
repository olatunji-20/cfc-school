<template>
    <section>
        <h1>for student board</h1>
        <div  v-for="student in students" :key="student.id" class="student">
            <div class="picture">
                <img :src="'http://localhost:3000/src/school/student-images/' + student.email + student.image" :alt="student.name" class="student-image"/>
            </div>
            <div class="about">
                <h4>id: {{ student.id }}</h4>
                <h4>Name: {{ student.name }}</h4>
                <h4>E-mail: {{  student.email + student.image }}</h4>
                <h4>department: {{ student.department }}</h4>
            </div>
            <div class="del">
                <Delete :id="student.id" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Delete from './Delete.vue';

    export default {
    name: "Board",
    data() {
        return {
            students: [],
        };
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
    components: { Delete }
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

.student {
    border: 2px solid green;
    width: 90%;
    height: 200px;
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

.student-image {
    width: 100%;
    height: 100%;
}

.about {
    border: 2px solid brown;
    width: 40%;
    height: 100%;
    text-align: left;
    padding-left: 20px;
}

.del {
    border: 1px solid red;
    height: 50px;
    width: 50px;
    position: relative;
    top: 35%;
}
</style>