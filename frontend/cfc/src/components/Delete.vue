<template>
    <div>
        <transition name="message">
            <div v-show="showDel" class="mess">
                <p> {{ message }} </p>
            </div>
        </transition>
        <div class="rem">
            <p v-on:click="deleteStudent({id})">delete student</p>
        </div>
    </div>
</template>


<script>
import router from '@/router';
import axios from 'axios';

export default {
    name: 'Delete',
    data() {
        return {
            message: "",
            showDel: true
        }
    },
    props: {
        id: Number
    },
    methods: {
        async deleteStudent({id}) {
            await axios.delete(`http://localhost:3000/api/v1/students/${id}`)
            console.log("deleted", id)
            try {
                console.log("student successfully deleted")
                this.message = "student deleted successfully."
                this.showDel = true;
                setTimeout(() => {
                    this.showDel = false
                }, 5000)
                // this.$router.go("/allstudents")
            } catch(error) {
                console.log("student could not be deleted")
            }
        }
    }
}

</script>

<style scoped>
.rem {
    width: 200px;
    height: 55px;
    margin-top: 80px;
    float: right;
    border: 3px solid red;
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

</style>