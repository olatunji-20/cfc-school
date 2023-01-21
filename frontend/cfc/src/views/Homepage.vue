<template>
    <section>
        <Navbar />
        <div class="container">
            <div class="left">
                <h2>A Better Way <br/> To <span style="color:aquamarine;">Keep Productive</span></h2>
                <p>Join the largest global student community online and say goodbye to lack of motivation. We are here to help you keep focus when studying.</p>
                <div class="joind">
                    <!-- <transition name="joinn"> -->
                        <div class="join1"><p>Join a Study Room</p></div>
                    <!-- </transition> -->
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
                <div class="student-image">
                    <img class="student-image-lady" src="../assets/lady.jpeg" />
                </div>
                <div class="time">
                    <img class="time-image" />
                </div>
            </div>
        </div>
        <div class="thousands">
            <p>Thousands of Students and People have made their decisions.</p>
            <p>Study Together is the best platform for studying.</p>
            <div class="media">
                <div class="scroller">
                    <div class="med"><img class="logooo" src="../assets/google.png" /></div>
                    <div class="med"><img class="logooo" src="../assets/codecademy.png" /></div>
                    <div class="med"><img class="logooo" src="../assets/discord.jpeg" /></div>
                    <div class="med"><img class="logooo" src="../assets/disney.png" /></div>
                    <div class="med"><img class="logooo" src="../assets/download.png" /></div>
                    <div class="med"><img class="logooo" src="../assets/upwork.png" /></div>
                    <div class="med"><img class="logooo" src="../assets/docker.png" /></div>
                    <div class="med"><img class="logooo" src="../assets/log4.png" /></div>
                </div>
            </div>
        </div>
        <Work />
        <!-- <div class="temp-links">
            <h1> CFC schools</h1>
                <h3><router-link to="/signup">Add a new student.</router-link></h3>
                <h3><router-link to="/allstudents">view all students.</router-link></h3>
                <h3><router-link to="/update-student">Update student info.</router-link></h3>
        </div> -->
        <section class="motivate">
            <div class="mot1">
                <h2>It is motivating and scientifically Proven</h2>
                <p>As crazy as it seems, your neurons mirror other people's behaviour:</p>
                <p>Seeing others studying boosts your productivity!</p>
                <div class="keep1"><div class="check"><Check-bold /></div><h5>keep you motivated</h5></div>
                <div class="keep2"><div class="check"><Check-bold /></div><h5>Boosts your productivity</h5></div>
                <button class="about">Learn About It </button>
            </div>
            <div class="mot2">
                <div class="comp">
                    <img class="boy-comp" src="../assets/boy.jpeg" />
                </div>
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
                    <transition name="detail">
                        <div v-show="detailA" class="details"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit inventore nisi rerum quam numquam qui. Id aliquid m reiciendis!</p></div>
                    </transition>
                </div>
                <div class="join">
                    <p class="topic">Can you unmute me so I can speak to other people?</p>
                    <p v-text="detailB ? first : second " v-on:click="showDetailB" class="icon"></p>
                    <transition name="detail">
                        <div v-show="detailB" class="details"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit inventore nisi rerum quam numquam qui. Id aliquid m reiciendis!</p></div>
                    </transition>
                </div>
                <div class="join">
                    <p class="topic">Where can I see all commands for the server?</p>
                    <p v-text="detailC ? first : second " v-on:click="showDetailC" class="icon"></p>
                    <transition name="detail">
                        <div v-show="detailC" class="details"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit inventore nisi rerum quam numquam qui. Id aliquid m reiciendis!</p></div>
                    </transition>
                </div>
                <div class="join">
                    <p class="topic">Can I join 25m - 50m session call even when it's on break?</p>
                    <p v-text="detailD ? first : second " v-on:click="showDetailD" class="icon"></p>
                    <transition name="detail">
                        <div v-show="detailD" class="details"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit inventore nisi rerum quam numquam qui. Id aliquid m reiciendis!</p></div>
                    </transition>
                </div>
            </div>
            <h1>Join Thousands of Students Around <br /> <span style="color: aquamarine"> The World and Start Studying Together</span></h1>
            <div class="but">
                <button class="server1">Join a Study Room</button>
                <button class="server2">Discord Server</button>
            </div>
        </section>
        <Footbar />
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footbar from '../components/Footbar.vue'
import Work from '../components/Work.vue'
import CheckBold from 'vue-material-design-icons/CheckBold.vue'
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
            CheckBold,
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
        /* border: 1px dashed red; */
        width: 100%;
        height: auto;
    }

    /* h1  {
        text-align: center;
    } */
    
    .container {
        width: 100%;
        height: auto;
        /* background-color: cornsilk; */
        /* border: 2px solid green; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .left {
        width: 50%;
        height: 100%;
        /* border: 3px solid brown; */
        text-align: left;
        padding: 2.5rem 3.4375rem 0rem;
    }
    .left h2 {
        font-size: 3rem;
    }
    .left p {
        font-size: 1rem;
    }
    .joind {
        width: 85%;
        height: 5.9375rem;
        /* border: 2px solid peru; */
        margin-top: 3.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    @keyframes float {
        0% {
            top: 0rem;
        }
        50% {
            top: 0.625rem;
        }
        100% {
            top: 0rem;
        }
    }
    .join1 {
        width: 12.5rem;
        height: 4.375rem;
        border: 0.0625rem solid aquamarine;
        background: #f9f9f9;
        border-radius: 2.5rem;
        position: relative;
        padding: 0.4375rem;
        text-align: center;
        font-size: 1.125rem;
        transition: .3s;
        animation-name: float;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .join1:hover {
        background: aquamarine;
        color: white;
        cursor: pointer;
        border: 0.0625rem solid #999999;
    }
    @keyframes float2 {
        0% {
            top: 0.625rem;
        }
        50% {
            top: 0rem
        }
        100% {
            top: 0.625rem;
        }
    }

    .join2 {
        width: 12.5rem;
        height: 4.375rem;
        border: 0.0625rem solid aquamarine;
        background: #f9f9f9;
        border-radius: 2.5rem;
        position: relative;
        padding: 0.4375rem;
        transition: .3s;
        text-align: center;
        font-size: 1.125rem;
        animation-name: float2;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .join2:hover {
        background: aquamarine;
        color: white;
        cursor: pointer;
        border: 0.0625rem solid #999999;
    }
    /* .joinn-enter-from {
        top: 0px;
    }
    .joinn-enter-to {
        top: 10px;
    }
    .joinn-enter-active {
        transition: top 1s ease;
    } */

    .focussed {
        width: 100%;
        height: auto;
        /* border: 2px solid saddlebrown; */
        padding: 0.0625rem;
        margin-top: 3.125rem;
    }
    .focussed p {
        font-size: 0.9375rem;
    }
    .kas-wrap {
        width: 100%;
        height: 5.3125rem;
        /* border: 2px solid green; */
        display: flex;
        flex-direction: row;
    }
    .kas1 {
        width: 5rem;
        height: 5rem;
        /* display: inline-block; */
        /* border: 2px solid hotpink; */
        padding: 0.0625rem;
        border-radius: 50%;
    }
    .kas-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .kas2 {
        width: 21.875rem;
        height: 5rem;
        /* border: 2px solid hotpink; */
        padding: 0.3125rem;
        line-height: 0.3125rem;
        margin-left: 1.875rem;
        /* display: inline-block; */
    }
    .right {
        width: 41%;
        height: 39.375rem;
        /* border: 4px solid lawngreen; */
        padding-top: 3.125rem;
    }
    .blur {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 50%;
        border: 5px solid pink;
        float: right;
        position: relative;
        right: 1.5rem;
        z-index: 9;
        background: grey;
        
    }
    .student-image {
        width: 22.5rem;
        height: 26.25rem;
        /* border: 2px solid blue; */
        margin: 3.125rem auto;
        border-radius: 1rem;
    }
    .student-image-lady {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        position: relative;
        bottom: 3.125rem;
        object-fit: cover;
    }
    .time {
        width: 15.625rem;
        height: 6.25rem;
        border: 5px solid darkblue;
        float: right;
        position: relative;
        bottom: 6.25rem;
        right: 1.7rem;
        border-radius: 0.9375rem;
        background: tomato;
    }
    .time-page {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .thousands {
        width: 100%;
        height: auto;
        /* border: 5px solid greenyellow; */
        /* background: whitesmoke; */
        margin-top: 4rem;
        padding: 4.375rem;
        font-size: 1.125rem;
        line-height: 0.8125rem;
    }
    .media {
        width: 70%;
        height: 6.25rem;
        margin: 5.55rem auto 3rem;
        /* border: 2px solid red; */
        padding: 0.0625rem;
        overflow: hidden;
        /* display: flex;
        flex-direction: row;
        justify-content: space-around; */
    }

    @keyframes scrollee {
        0% {
            right: 0rem;
        }
        13% {
            right: 0rem;
        }
        26% {
            right: 18.75rem;
        }
        39% {
            right: 18.75rem;
        }
        52% {
            right: 37.5rem;
        }
        65% {
            right: 37.5rem;
        }
        78% {
            right: 56.25rem;
        }
        90% {
            right: 56.25rem;
        }
        100% {
            right: 0rem;
        }
    }
    .scroller {
        /* border: 2px solid green; */
        height: auto;
        width: 103.125rem;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        animation-name: scrollee;
        animation-duration: 8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .med {
        width: 10.625rem;
        height: 5rem;
        /* border: 0.0625rem solid black; */
    }

    .logooo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }




/* 

    .temp-links {
        width: 300px;
        height: 300px;
        border: 9px solid goldenrod;
    }
 */

    .motivate {
        width: 100%;
        height: auto;
        /* border: 4px solid blue; */
        /* background: wheat; */
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 1.25rem;
        flex-wrap: wrap;
    }

    .mot1 {
        /* border: 2px solid green; */
        width: 45%;
        height: auto;
        padding: 1.875rem 1.875rem;
        text-align: left;
    }
    .mot1 h2 {
        font-size: 2.8125rem;
    }
    .mot1 p {
        font-size: 1rem;
        line-height: 0.7rem;
    }
    .keep1 {
        /* border: 1px solid red; */
        height: 2.8125rem;
        width: 18.75rem;
        margin-top: 3rem;
        padding: 0.0625rem;
    }
    .keep1 .check, .keep2 .check {
        width: 2.5rem;
        height: 2.5rem;
        /* border: 1px solid hotpink; */
        background: aquamarine;
        border-radius: 50%;
        padding: 7px;
        display: inline-block;
        color: white;
    }
    .keep1 h5, .keep2 h5 {
        display: inline-block;
        line-height: 0rem;
        position: relative;
        bottom: 0.5rem;
        left: 0.9375rem;
    }
    .keep2 {
        /* border: 1px solid red; */
        height: 2.8125rem;
        width: 18.75rem;
        margin-top: 1.25rem;
        padding: 0.0625rem;
    }
    .about {
        width: 12.5rem;
        height: 3.75rem;
        border: 0.0625rem solid aquamarine;
        border-radius: 2.1875rem;
        position: relative;
        font-size: 1.125rem;
        top: 1.25rem;
        background: #f9f9f9;
        /* margin-top: 1.875rem; */
    }
    .about:hover {
        top: 0.625rem;
        background: aquamarine;
        color: white;
        border: 1px solid #999999;
        transition: all .3s ease;
        cursor: pointer;
    }
    .mot2 {
        /* border: 2px solid blue; */
        width: 45%;
        height: auto;
    }
    .comp {
        width: 28.125rem;
        height: 21.875rem;
        /* border: 2px solid red; */
        margin: 1.25rem auto 0px;
        border-radius: 1rem;
    }
    .boy-comp {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        object-fit: cover;
    }
    .top {
        width: 18.75rem;
        height: 9.375rem;
        border: 5px solid green;
        float: right;
        position: relative;
        bottom: 4.6875rem;
        border-radius: 1.25rem;
        background: tomato;
    }
    .last {
        /* border: 4px solid green; */
        width: 100%;
        height: auto;
        margin-bottom: 7.5rem;
        /* background: whitesmoke; */
        padding: 3.5rem;
    }
    .last h1 {
        font-size: 3rem;
    }
    .last p {
        font-size: 1.025rem;
    }
    .study {
        /* border: 1px solid blue; */
        width: 60%;
        height: auto;
        margin: 5rem auto 8.625rem;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .join {
        border: 1px solid black;
        border-radius: 0.1875rem;
        width: 90%;
        height: auto;
        margin: 1rem auto;
        padding: 0.125rem 1.25rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: left;
        transition: .4s;
    }
    .join:hover {
        border: 1px solid red;
    }
    .join .topic {
        font-weight: bolder;
        /* border: 1px solid teal; */
        width: 90%;
    }
    .join .icon {
        /* border: 1px solid green; */
        width: auto;
        cursor: pointer;
        font-size: 1.25rem;
        font-weight: bolder;
    }
    @keyframes detail {
        0% {
            height: 0rem;
        }
        100% {
            height: 6.25rem;
        }
    }
    .details {
        border: 2px solid aquamarine;
        border-radius: 5px;
        width: 100%;
        height: 6.25rem;
        display: block;
        overflow: hidden;
        padding: 0.1875rem 0.625rem;
        animation-name: detail;
        animation-duration: .3s;
    }

    .detail-leave-from {
        height: 6.25rem;
    }
    .detail-leave-to {
        height: 0rem;
    }
    .detail-leave-active {
        transition: height .3s linear;
    }



    
    .but {
        /* border: 1px solid red; */
        width: 45%;
        height: 4.375rem;
        margin: 0rem auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .server1 {
        width: 14.375rem;
        height: 4.375rem;
        border: 1px solid aquamarine;
        font-size: 1.25rem;
        position: relative;
        transition: .3s;
        border-radius: 2.1875rem;
        animation-name: float2;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .server1:hover {
        background: aquamarine;
        color: white;
        cursor: pointer;
        border: 1px solid #999999;
    }
    .server2 {
        width: 14.375rem;
        height: 4.375rem;
        border: 1px solid aquamarine;
        font-size: 1.25rem;
        position: relative;
        transition: .3s;
        border-radius: 2.1875rem;
        animation-name: float;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .server2:hover {
        background: aquamarine;
        color: white;
        cursor: pointer;
        border: 1px solid #999999;
    }































    @media screen and (max-width: 850px) {
        .container {
            flex-direction: column;
        }
        .left {
            width: 90%;
            margin: 0rem auto;
        }
        .right {
            width: 90%;
            height: auto;
            margin: 0rem auto;
        }
        .blur {
            right: 5rem;
        }

        .student-image {
            width: 28.125rem;
            height: 31.25rem;
        }
        .thousands {
            padding: 2rem;
        }
        .media {
            width: 80%;
        }











        .motivate {
            flex-direction: column;
        }
        .mot1 {
            width: 90%;
            margin: 0rem auto;
            padding-bottom: 3.125rem;
        }





        .mot2 {
            width: 90%;
            margin: 0rem auto;
            padding-top: 3.125rem;
        }





        .last {
            padding: 2rem;
        }

        .study {
            width: 85%;
            margin: 5rem auto 7rem;
        }


        .but {
            width: 70%;
        }










    }





















    @media screen and (max-width: 500px) {
        section{
            width: 100%;
            /* border: 1px dashed red; */
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
        .join1, .join2 {
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
            height: 50px;
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
            width: 98%;
            padding: 0px;
            margin-bottom: 100px;
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