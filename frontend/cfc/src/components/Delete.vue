<template>
    <div class="rem">
        <h3 v-on:click="deleteStudent({id})">del</h3>
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
    width: 45px;
    height: 45px;
    border: 3px solid lawngreen;
    cursor: pointer;
}
h3 {
    color: green;
}
</style>