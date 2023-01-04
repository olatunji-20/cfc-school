<template>
    <div class="rem">
        <p v-on:click="deleteStudent({id})">delete student</p>
    </div>
</template>


<script>
import router from '@/router';
import axios from 'axios';

export default {
    name: 'Delete',
    data() {
        return {

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
                this.$router.go("/allstudents")
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
    height: 50px;
    margin-top: 150px;
    float: right;
    border: 3px solid lawngreen;
    cursor: pointer;
}
</style>