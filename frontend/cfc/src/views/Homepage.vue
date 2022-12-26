<template>
    <section>
        <Navbar />
        <div class="container">
            <div class="left">
                <h2>A Better Way <br/> To Keep Productive</h2>
                <p>Join the largest global student community online and say goodbye to lack of motivation. We are here to help you keep focus when studying.</p>
                <div class="joind">
                    <div class="join1"><p>Join a Study Room</p></div>
                    <div class="join1"><p>Discord Server</p></div>
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
            <div class="mot2">
                <div class="comp"></div>
                <div class="top"></div>
            </div>
        </section>
        <section class="last">
            <h1>Study Together:<br /> Frequently Asked Questions</h1>
            <p>You will find here the answers to the frequently asked questions and community <br /> quidelines, that allow us to study in a motivating and secure environment.</p>
            <div class="study">
                <div class="join">
                    <p class="topic">How can I join a study call?</p>
                    <p v-text="detailA ? first : second " v-on:click="showDetailA" class="icon"></p>
                    <div v-show="detailA" class="details"><p>hfhfhfhf fhfhhf fffhf ffhfh hfhfhfhf fhfhhf fffhf ffhfhhfhfhfhf fhfhhf fffhf ffhfh</p></div>
                </div>
                <div class="join">
                    <p class="topic">Can you unmute me so I can speak to other people?</p>
                    <p v-text="detailB ? first : second " v-on:click="showDetailB" class="icon"></p>
                    <div v-show="detailB" class="details"><p>hfhfhfhf fhfhhf fffhf ffhfh</p></div>
                </div>
                <div class="join">
                    <p class="topic">Where can I see all commands for the server?</p>
                    <p v-text="detailC ? first : second " v-on:click="showDetailC" class="icon"></p>
                    <div v-show="detailC" class="details"><p>hfhfhfhf fhfhhf fffhf ffhfh</p></div>
                </div>
                <div class="join">
                    <p class="topic">Can I join 25m - 50m session call even when it's on break?</p>
                    <p v-text="detailD ? first : second " v-on:click="showDetailD" class="icon"></p>
                    <div v-show="detailD" class="details"><p>hfhfhfhf fhfhhf fffhf ffhfh</p></div>
                </div>
            </div>
            <h1>Join Thousands of Students Around <br /> <span style="color: blue"> The World and Start Studying Together</span></h1>
            <div class="but">
                <button class="server">Join a Study Room</button>
                <button class="server">Discord Server</button>
            </div>
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
                first: "-",
                second: "+",
                detailA: false,
                detailB: false,
                detailC: false,
                detailD: false
            }
        },
        components: {
            Navbar,
            Work,
            Footbar
        },
        methods: {
            showDetailA() {
                    this.detailA = !this.detailA;
                    this.detailB = false;
                    this.detailC = false;
                    this.detailD = false;
            },
            showDetailB() {
                    this.detailB = !this.detailB;
                    this.detailA = false;
                    this.detailC = false;
                    this.detailD = false;
            },
            showDetailC() {
                    this.detailC = !this.detailC;
                    this.detailB = false;
                    this.detailA = false;
                    this.detailD = false;
            },
            showDetailD() {
                    this.detailD = !this.detailD;
                    this.detailB = false;
                    this.detailC = false;
                    this.detailA = false;
            }
        }
    }
</script>

<style scoped>
    section {
        border: 7px solid red;
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
    .joind {
        width: 85%;
        height: 90px;
        border: 2px solid peru;
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .join1 {
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
        height: auto;
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
        width: 300px;
        height: 300px;
        border: 9px solid goldenrod;
    }


    .motivate {
        width: 100%;
        height: auto;
        border: 10px solid red;
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
        height: auto;
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
        width: 50%;
        height: auto;
    }
    .comp {
        width: 550px;
        height: 450px;
        border: 2px solid red;
        margin: 20px auto 0px;
        border-radius: 20px;
    }
    .top {
        width: 400px;
        height: 150px;
        border: 1px solid green;
        float: right;
        position: relative;
        bottom: 75px;
        border-radius: 20px;
    }
    .last {
        border: 8px solid green;
        width: 100%;
        height: auto;
        margin-bottom: 120px;
        background: whitesmoke;
        padding: 80px;
    }
    .last h1 {
        font-size: 60px;
    }
    .last p {
        font-size: 20px;
    }
    .study {
        border: 4px solid blue;
        width: 60%;
        height: auto;
        margin: 80px auto 250px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .join {
        border: 1px solid black;
        width: 90%;
        height: auto;
        margin: 20px auto;
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: left;
    }
    .join .topic {
        font-weight: bolder;
        border: 1px solid teal;
        width: 90%;
    }
    .join .icon {
        border: 1px solid green;
        width: auto;
        cursor: pointer;
        font-size: 20px;
        font-weight: bolder;
    }
    @keyframes detail {
        0% {
            height: 10px;
        }
        100% {
            height: 100px;
        }
    }
    .details {
        border: 3px solid red;
        width: 100%;
        height: 100px;
        display: block;
        overflow: hidden;
        padding: 3px 10px;
        animation-name: detail;
        animation-duration: .5s;
    }
    .but {
        border: 1px solid red;
        width: 35%;
        height: 80px;
        margin: 0px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .server {
        width: 230px;
        height: 70px;
        border: 1px solid firebrick;
        font-size: 20px;
        border-radius: 35px;
    }


















































    @media screen and (max-width: 450px) {
        section{
            width: 100%;
            border: 1px dashed red;
        }
        .container {
            height: auto;
        }

        .left {
            width: 100%;
            padding: 20px 30px;
        }
        .left h2 {
            font-size: 45px;
        }
        .left p {
            font-size: 18px;
        }
        .joind {
            width: 100%;
            margin-top: 40px;
            height: 65px;
        }
        .join1 {
            width: 200px;
            height: 60px;
            padding: 2px;
        }
        .focussed {
            width: 100%;
            padding: 2px;
        }
        .focussed p {
            font-size: 14px;
        }







        .right {
            display: none;
        }



        .thousands {
            padding: 20px;
            font-size: 16px;
            line-height: 15px;
        }
        .media {
            width: 70%;
            height: auto;
            flex-direction: column;
            margin: 40px auto;
            padding: 5px;
        }
        .med {
            width: 200px;
            margin: 10px auto;
        }















        .motivate {
            flex-direction: column;
            padding: 10px;
        }
        .mot1 {
            width: 100%;
            padding: 10px;
        }
        .mot1 h2 {
            font-size: 40px;
        }
        .keep1, .keep2 {
            margin-top: 20px;
        }
        .about {
            width: 150px;
            height: 60px;
        }
        .mot2 {
            width: 100%;
        }
        .comp {
            width: 350px;
            height: 250px;
        }
        .top {
            width: 170px;
            height: 100px;
            bottom: 60px;
        }




        .last {
            padding: 10px;
        }
        .last h1 {
            font-size: 35px;
        }
        .last p {
            font-size: 16px;
        }
        .study {
            width: 95%;
            padding: 0px;
            margin-bottom: 140px;
        }
        .join {
            margin: 10px auto;
            padding: 5px 10px;
        }
        .but {
            width: 80%;
            height: 60px;
        }
        .server {
            width: 150px;
            height: 50px;
            font-size: 16px;
        }
    } 

</style>