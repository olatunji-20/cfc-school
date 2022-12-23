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
                    <div class="kas-wrap">
                        <div class="kas1">
                            <img src="../assets/sheriff.png" class="kas-image" />
                        </div>
                        <div class="kas2">
                            <h4>Kassandra</h4>
                            <p>Student from University of Waterloo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="blur"></div>
                <div class="student-image"></div>
                <div class="time"></div>
            </div>
        </div>
        <div class="thousands">
            <p>Thousands of Students and People have made their decisions.</p>
            <p>Study Together is the best platform for studying.</p>
            <div class="media">
                <div class="med"></div>
                <div class="med"></div>
                <div class="med"></div>
                <div class="med"></div>
            </div>
        </div>
        <Work />
        <div class="temp-links">
            <h1> CFC schools</h1>
                <h3><router-link to="/signup">Add a new student.</router-link></h3>
                <h3><router-link to="/allstudents">view all students.</router-link></h3>
                <h3><router-link to="/update-student">Update student info.</router-link></h3>
        </div>
        <section class="motivate">
            <div class="mot1">
                <h2>It is motivating and scientifically Proven</h2>
                <p>As crazy as it seems, your neurons mirror other people's behaviour:</p>
                <p>Seeing others studying boosts your productivity!</p>
                <div class="keep1"><h5>keep you motivated</h5></div>
                <div class="keep2"><h5>Boosts your productivity</h5></div>
                <button class="about">Learn About It </button>
            </div>
            <div class="mot2"></div>
        </section>
        <Footbar />
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footbar from '../components/Footbar.vue'
import Work from '../components/Work.vue'
    export default {
        name: 'Homepage',
        data() {
            return {
                
            }
        },
        components: {
            Navbar,
            Work,
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
        padding: 5px;
        text-align: center;
        font-size: 18px;
    }
    .focussed {
        width: 85%;
        height: auto;
        border: 2px solid saddlebrown;
        padding: 5px;
        margin-top: 60px;
    }
    .focussed p {
        font-size: 17px;
    }
    .kas-wrap {
        width: 100%;
        height: 85px;
        border: 2px solid green;
        display: flex;
        flex-direction: row;
    }
    .kas1 {
        width: 80px;
        height: 80px;
        /* display: inline-block; */
        border: 2px solid hotpink;
        padding: 1px;
        border-radius: 50%;
    }
    .kas-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .kas2 {
        width: 350px;
        height: 80px;
        border: 2px solid hotpink;
        padding: 5px;
        line-height: 5px;
        margin-left: 30px;
        /* display: inline-block; */
    }
    .right {
        width: 38%;
        height: 100%;
        border: 4px solid lawngreen;
        padding-top: 50px;
    }
    .blur {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid pink;
        float: right;
        position: relative;
        right: 80px;
        
    }
    .student-image {
        width: 450px;
        height: 650px;
        border: 1px solid blue;
        margin: 50px auto;
        border-radius: 20px;
    }
    .time {
        width: 250px;
        height: 100px;
        border: 1px solid darkblue;
        float: right;
        position: relative;
        bottom: 100px;
        right: 50px;
        border-radius: 15px;
    }
    .thousands {
        width: 100%;
        height: 500px;
        border: 5px solid greenyellow;
        background: whitesmoke;
        margin-top: 60px;
        padding: 70px;
        font-size: 20px;
        line-height: 13px;
    }
    .media {
        width: 1200px;
        height: 100px;
        margin: 100px auto;
        border: 2px solid red;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .med {
        width: 250px;
        height: 80px;
        border: 1px solid black;
    }







    .temp-links {
        width: 500px;
        height: 300px;
        border: 9px solid goldenrod;
    }


    .motivate {
        width: 100%;
        height: 800px;
        border: 5px solid red;
        background: wheat;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        flex-wrap: wrap;
    }

    .mot1 {
        border: 2px solid green;
        width: 40%;
        height: 700px;
        padding: 30px;
        text-align: left;
    }
    .mot1 h2 {
        font-size: 60px;
    }
    .mot1 p {
        font-size: 20px;
        line-height: 15px;
    }
    .keep1 {
        border: 1px solid red;
        height: 50px;
        width: 300px;
        margin-top: 80px;
    }
    .keep2 {
        border: 1px solid red;
        height: 50px;
        width: 300px;
        margin-top: 30px;
    }
    .about {
        width: 220px;
        height: 70px;
        border: 1px solid red;
        border-radius: 35px;
        font-size: 18px;
        margin-top: 30px;
    }
    .mot2 {
        border: 2px solid blue;
        width: 45%;
        height: 600px;
    }

</style>