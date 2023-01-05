<template>
    <section>
        <Navbar />
        <div>
            <form @submit.prevent="test" enctype="multipart/form-data">
                <input type="text" placeholder="name" v-model="name" />
                <input type="text" placeholder="class" v-model="form" />
                <input type="email" placeholder="E-mail" v-model="email" />
                <input type="tel" placeholder="phone" v-model="phone" />
                <input type="text" placeholder="department" v-model="department" />
                <input type="file" name="img" ref="picture" v-on:change="fileSelected" />
                <input type="date" placeholder="date of birth" v-model="dob" />
                <button>SUBMIT</button>
            </form>
        </div>
        <Footbar />
    </section>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue'
import Footbar from '../components/Footbar.vue'

export default {
    name: 'Register',
    data() {
        return {
            name: "",
            form: "",
            email: "",
            phone: "",
            department: "",
            selectedImage: "",
            dob: ""
        };
    },
    components: {
        Navbar,
        Footbar
    },
    methods: {
        fileSelected() {
            const pic = this.$refs.picture.files[0];
            this.selectedImage = pic;
        },
        async test() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('form', this.form);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('department', this.department);
            formData.append('picture', this.selectedImage, this.selectedImage.name);
            formData.append('dob', this.dob);

            try {
                await axios.post("http://localhost:3000/api/v1/students", formData);
                console.log("sent");
                this.$router.go("/sign-up")
                
            } catch (error) {
                console.log(error);
            }


            
        }
    }
}
</script>


<style scoped>
div {
    border: 4px solid darkblue;
    background-color: aqua;
    width: 600px;
    height: auto;
    margin: 100px auto;
    padding: 30px 20px;
}

input {
    width: 85%;
    height: 45px;
    text-indent: 20px;
    margin-top: 35px;
    border: 0px;
    border-radius: 8px;
}
input:focus {
    border: 5px solid red;
}

button {
    margin: 90px auto 30px;
    background-color: tomato;
    border: 0px;
    padding: 10px;
    display: block;
    width: 180px;
    height: 50px;
    border-radius: 25px;
    color: white;
}
</style>