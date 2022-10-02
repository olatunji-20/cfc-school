<template>
    <section>
        <div>
            <form @submit.prevent="test" enctype="multipart/form-data">
                <!-- <input type="text" v-model="studentDetails.name" placeholder="Input your name here" name="name">
                <input type="text" v-model="studentDetails.form" placeholder="Input your current class here"
                    name="form">
                <input type="e-mail" v-model="studentDetails.email" placeholder="Input your email here" name="email">
                <input type="phone" v-model="studentDetails.phone" placeholder="Input your phone no. here" name="phone">
                <input type="text" v-model="studentDetails.department" placeholder="Input your department here"
                    name="department"> -->
                <!-- <input type="date" v-model="studentDetails.dob" placeholder="Input your date of birth here" name="dob"> -->
                
                
                <input type="file" ref="picture" v-on:change="fileSelected">
                <button>SUBMIT</button>
            </form>
        </div>
    </section>
</template>

<script>
// import { mapActions } from 'vuex';
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            // studentDetails: {
            //     name: "",
            //     form: "",
            //     email: "",
            //     phone: "",
            //     department: "",
            //     dob: ""
            // },
            selectedImage: "",
            name: "sheriffdeen"
        };
    },
    methods: {
        fileSelected() {
            // console.log(event)
            // this.SelectedImage = this.$refs.picture.files[0];
            const pic = this.$refs.picture.files[0];
            this.selectedImage = pic;
        },
        test() {
            const formData = new FormData();
            formData.append('picture', this.selectedImage, this.selectedImage.name);
            alert(formData.sheriff);
            console.log(formData);

            axios.post("http://localhost:3000/api/v1/students", formData)

            
        }
        // ...mapActions("student", ["submitStudent"])
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