<template>
    <section>
        <div>
            <form method="POST">
                <input type="text" v-model="studentDetails.name" placeholder="Input your name here" name="name">
                <input type="text" v-model="studentDetails.form" placeholder="Input your current class here" name="form">
                <input type="e-mail" v-model="studentDetails.email" placeholder="Input your email here" name="email">
                <input type="phone" v-model="studentDetails.phone" placeholder="Input your phone no. here" name="phone">
                <input type="text" v-model="studentDetails.department" placeholder="Input your department here" name="department">
                <input type="text" v-model="studentDetails.image" placeholder="Input your image here" name="image">
                <input type="date" v-model="studentDetails.dob" placeholder="Input your date of birth here" name="dob">
                <button @click="submitStudent(studentDetails)">SUBMIT</button>
            </form>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        name: 'Register',
        data() {
            return {
                studentDetails: {
                    name: "",
                    form: "",
                    email: "",
                    phone: "",
                    department: "",
                    image: "",
                    dob: ""
                }
            }
        },
        methods: {
            ...mapActions("student", ["submitStudent"])
        }
    }
</script>


<style scoped>
    div {
        border: 2px solid darkblue;
        background-color: aqua;
        width: 400px;
        height: auto;
        margin: 20px auto;
        padding: 30px 20px;
    }

    input {
        width: 300px;
        height: 25px;
        text-indent: 20px;
        margin-top: 30px;
    }

    button {
        margin-top: 40px;
        background-color: tomato;
        border: 0px;
        padding: 10px;
    }
            
</style>