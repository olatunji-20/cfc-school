<template>
    <section>
        <Navbar />
        <!-- <header>
            <div class="logo-container"></div>
            <div class="signs">
                <ul>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </header> -->
        <div class="container">
            <div class="left">
                
            </div>
            <div class="right">
                <h1> STUDENT IMAGE</h1>
            </div>
        </div>
        <div class="temp-links">
            <h1> CFC schools</h1>
                <h3><router-link to="/signup">Add a new student.</router-link></h3>
                <h3><router-link to="/allstudents">view all students.</router-link></h3>
                <h3><router-link to="/update-student">Update student info.</router-link></h3>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
    export default {
        name: 'Homepage',
        data() {
            return {
                
            }
        },
        components: {
            Navbar
        }
    }
</script>

<style scoped>
    section {
        border: 2px solid red;
        width: 100%;
        height: auto;
    }

    /* header {
        width: 100%;
        height: 15vh;
        border: 1px solid green;
        background-color: aquamarine;
    }

    .logo-container {
        width: 250px;
        height: 60px;
        border: 1px solid black;
        background-color: floralwhite;
        position: relative;
        float: left;
        margin: 20px 50px;
    } */

    /* .signs {
        width: 250px;
        height: 60px;
        position: relative;
        float: right;
        border: 2px solid blue;
        margin: 25px 100px 0px;
    }

    .signs ul li {
        width: auto;
        display: inline-block;
        padding: 5px 15px;
        border: 1px solid red;
        margin: 0px 10px;
    } */

    h1  {
        text-align: center;
    }
    
    .container {
        width: 100%;
        height: 90vh;
        background-color: cornsilk;
        border: 2px solid green;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .left {
        width: 400px;
        height: 500px;
        border: 3px solid brown;
    }
    .right {
        width: 300px;
        height: 400px;
        border: 4px solid lawngreen;
    }

    .temp-links {
        width: 500px;
        height: 300px;
        border: 9px solid goldenrod;
    }

</style>