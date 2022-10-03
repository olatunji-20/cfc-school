<template>
    <section>
        <div>
            <form @submit.prevent="test" enctype="multipart/form-data">

                <input type="file" ref="picture" v-on:change="fileSelected">
                <button>SUBMIT</button>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            selectedImage: "",
        };
    },
    methods: {
        fileSelected() {
            const pic = this.$refs.picture.files[0];
            this.selectedImage = pic;
        },
        async test() {
            const formData = new FormData();
            formData.append('picture', this.selectedImage, this.selectedImage.name);

            try {
                await axios.post("http://localhost:3000/api/v1/students", formData);
                console.log("sent")
                
            } catch (error) {
                console.log(error);
            }


            
        }
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