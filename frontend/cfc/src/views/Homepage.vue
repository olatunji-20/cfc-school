<template>
    <section>
        <Navbar />
        <div class="container">
            <div class="left">
                <h2>A Better Way <br/> To Keep Productive</h2>
                <p>Join the largest global student community online and say goodbye to lack of motivation. We are here to help you keep focus when studying.</p>
                <div class="join">
                    <div class="join1"><p>Join a Study Room</p></div>
                    <div class="join2"><p>Discord Server</p></div>
                </div>
                <div class="focussed">
                    <p>"I have never been so focused and productive when studying by myself before. I usually study with  group of friends to stay on track and motivate each other."</p>
                    <div class="kas1"></div>
                    <div class="kas2"></div>
                </div>
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
        <Footbar />
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footbar from '../components/Footbar.vue'
    export default {
        name: 'Homepage',
        data() {
            return {
                
            }
        },
        components: {
            Navbar,
            Footbar
        }
    }
</script>

<style scoped>
    section {
        border: 2px solid red;
        width: 100%;
        height: auto;
    }

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
        width: 50%;
        height: 100%;
        border: 3px solid brown;
        text-align: left;
        padding: 70px 100px 0px;
    }
    .left h2 {
        font-size: 75px;
    }
    .left p {
        font-size: 22px;
    }
    .join {
        width: 85%;
        height: 90px;
        border: 2px solid navajowhite;
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .join1, .join2 {
        width: 250px;
        height: 80px;
        border: 2px solid chartreuse;
        border-radius: 40px;
        padding: 5 px;
        text-align: center;
        font-size: 18px;
    }
    .focussed {
        width: 85%;
        height: 220px;
        border: 2px solid saddlebrown;
        padding: 5px;
        margin-top: 60px;
    }
    .focussed p {
        font-size: 17px;
    }
    .kas1 {
        width: 100px;
        height: 100px;
        border: 1px solid hotpink;
    }
    .kas2 {
        width: 400px;
        height: 100px;
        border: 2px solid hotpink;
    }
    .right {
        width: 38%;
        height: 100%;
        border: 4px solid lawngreen;
    }

    .temp-links {
        width: 500px;
        height: 300px;
        border: 9px solid goldenrod;
    }

</style>