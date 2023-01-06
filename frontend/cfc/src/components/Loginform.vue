<template>
    <section class="main">
        <h1>FORM</h1>
        <div class="form">
            <input placeholder="E-mail" v-model="userEmail" />
            <input placeholder="Password" v-model="password" />
            <button v-on:click="loud()">SUBMIT</button>
        </div>
    </section>    
</template>

<script>
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
    }
}
</script>

<style scoped>
.main {
    width: 90%;
    height: 600px;
    border: 2px solid red;
    margin: 100px auto;
}
.form {
    width: 600px;
    height: 400px;
    border: 3px solid tomato;
    background: powderblue;
    margin: 40px auto;
    padding: 30px;
}
input {
    width: 90%;
    height: 37px;
    margin: 20px auto;
    text-indent: 15px;
    border-radius: 3px;
    border: 0px;
}
button {
    width: 200px;
    height: 40px;
    margin-top: 50px;
    border-radius: 20px;
    border: 0px;
}
</style>