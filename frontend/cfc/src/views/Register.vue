<template>
    <section>
        <transition name="message">
            <div v-show="showMessage" class="mess">
                <p> {{ message }} </p>
            </div>
        </transition>
        <Navbar />
        <div class="main">
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
            dob: "",
            message: "",
            showMessage: false
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
            // console.log(this.name + " " + this.form + " " + this.email + " " + this.phone + " " + this.department + " " + this.selectedImage + " " + this.dob);
            // if( this.name | this.form | this.email | this.phone | this.department | this.dob == "") {
            //     this.showMessage = true;
            //     this.message = "Please, fill out all required spaces.";
            //     setTimeout(() => {
            //         this.showMessage = false
            //     }, 2000)
            // } else {
            //     this.showMessage = true;
            //     this.message = "you good.";
            //     setTimeout(() => {
            //         this.showMessage = false
            //     }, 2000)
            // }


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
                this.message = "congratulations, student has been registered successfully.";
                this.showMessage = true;
                setTimeout(() => {
                    this.showMessage = false
                }, 5000)
                // this.$router.go("/sign-up");
                
            } catch (error) {
                console.log(error);
                this.message = "sorry, student cannot be registered at this moment."
                this.showMessage = true;
                setTimeout(() => {
                    this.showMessage = false
                }, 5000)
            }


            
        }
    }
}
</script>


<style scoped>
.main {
    border: 1px solid aquamarine;
    border-radius: 10px;
    background-color: #DDFFF4;
    width: 40%;
    height: auto;
    position: relative;
    top: 0px;
    margin: 20px auto 80px;
    padding: 30px 20px;
}

input {
    width: 85%;
    height: 30px;
    text-indent: 20px;
    margin-top: 20px;
    border: 0px;
    border-radius: 6px;
}
input:focus {
    border: 5px solid aquamarine;
}

button {
    margin: 45px auto 30px;
    background-color: aquamarine;
    border: 0px;
    padding: 10px;
    display: block;
    width: 180px;
    height: 40px;
    border-radius: 20px;
    color: white;
    transition: 0.3s;
}
button:hover {
    background: #42826D;
    cursor: pointer;
}

.mess {
    width: 600px;
    height: auto;
    padding: 7px 50px;
    border-radius: 4px;
    background: tomato;
    position: absolute;
    left: 26%;
    transform: translateY(150px);
    /* margin: 0px auto; */
    z-index: 9;
    color: white;
}

.message-enter-from {
    opacity: 0;
    transform: translateY(0px);
}
.message-enter-to {
    opacity: 1;
    transform: translateY(150px);
}
.message-enter-active {
    transition: all .5s ease;
}
.message-leave-from {
    opacity: 1;
    transform: translateY(150px);
}
.message-leave-to {
    opacity: 0;
    transform: translateY(0px);
}
.message-leave-active {
    transition: all .5s ease;
}



@media screen and (max-width: 850px) {
    .main {
        width: 70%;
    }
}


@media screen and (max-width: 500px) {
    .main {
        width: 85%;
    }
}
</style>