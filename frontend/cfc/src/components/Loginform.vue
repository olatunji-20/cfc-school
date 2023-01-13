<template>
    <section class="main">
        <div class="form">
            <div class="image"><AccountPlus width="'90'" /></div>
            <input placeholder="E-mail" v-model="userEmail" />
            <input placeholder="Password" v-model="password" />
            <button v-on:click="loud()">SUBMIT</button>
            <p>Don't have an acccount? sign up here.</p>
        </div>
    </section>    
</template>

<script>
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue';

export default{
    name: "Loginform",
    data() {
        return {
            userEmail: "",
            password: ""
        }
    },
    methods: {
        loud() {
            console.log(this.userEmail + " " + this.password)
        }
    },
    components: {
        AccountPlus
    }
}
</script>

<style scoped>
.main {
    width: 90%;
    height: auto;
    /* border: 2px solid red; */
    margin: 100px auto;
}
.form {
    width: 600px;
    height: auto;
    /* border: 3px solid tomato; */
    background: #DDFFF4;
    margin: 40px auto;
    padding: 30px;
}
.image {
    width: 150px;
    height: 150px;
    border: 5px solid #42826D;
    margin: 50px auto;
    border-radius: 50%;
    background: aquamarine;
    color: white;
}
input {
    width: 90%;
    height: 37px;
    margin: 20px auto;
    text-indent: 15px;
    border-radius: 5px;
    border: 0px;
}
button {
    width: 200px;
    height: 40px;
    margin-top: 50px;
    border-radius: 20px;
    border: 0px;
    background: aquamarine;
    color: white;
    cursor: pointer;
    transition: .3s;
}
button:hover {
    background: #42826D;
}
.form p {
    font-size: 12px;
    margin-top: 30px;
}
</style>