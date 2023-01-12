<template>
    <section>
        <h1>How It Works</h1>
        <p>It's time to choose wisely your learning platform. Bimble has professional <br /> mentors and instructors that always helps you to grow up your career.</p>
        <div class="main">
            <div class="focus">
                <router-link class="link" to="/allstudents">
                    <div class="purpose">
                        <div class="purp"><h3>ffgfg</h3></div>
                    </div>
                    <h3>View all Students</h3>
                    <p>Take a good look at all the students that have taken the bold move to sign up with us.<br /> It is always good to be well organized.</p>
                </router-link>
            </div>
            <div class="focus">
                <router-link class="link" to="/signup">
                    <div class="purpose">
                        <div class="purp"><h3>ffgfg</h3></div>
                    </div>
                    <h3>Add a new student</h3>
                    <p>We always stay organised for what we want to teach people. It is always good to be well organized.</p>
                </router-link>
            </div>
            <div class="focus">
                <router-link class="link" to="/update-student">                
                    <div class="purpose">
                        <div class="purp"><h3>ffgfg</h3></div>
                    </div>
                    <h3>Update student info</h3>
                    <p>We always stay organised for what we want to teach people. It is always good to be well organized.</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Work'
}
</script>

<style scoped>
section {
    /* border: 2px solid blue; */
    width: 100%;
    height: auto;
    padding: 20px 50px;
}
section h1 {
    font-size: 50px;
    line-height: 20px;
}
section p {
    font-size: 17px;
    line-height: 21px;
}
.main {
    /* border: 5px solid teal; */
    width: 90%;
    height: auto;
    margin: 50px auto;
    padding: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.focus {
    /* border: 1px solid black; */
    border-radius: 5px;
    width: 260px;
    height: 420px;
    background: floralwhite;
    padding: 10px;
    position: relative;
    top: 1px;
}
.focus:hover {
    top: 10px;
    transition: all .3s ease;
    border: 0px;
    box-shadow: 0.06rem 0.06rem 0.3rem 0.06rem #999999;
}
.focus p {
    font-size: 17px;
}
.link {
    text-decoration: none;
    color: black;

}
.purpose {
    width: 150px;
    height: 150px;
    background: plum;
    border-radius: 20px;
    margin: 20px auto 50px;
    padding: 2px;
}

@keyframes rotor {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.purp {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: blue;
    margin: 30px auto;
    color: white;    
    animation-name: rotor;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}


@media screen and (max-width: 850px) {
    .main {
        width: 95%;
    }
}




@media screen  and (max-width: 500px) {
    section {
        padding: 10px;
    }
    section h1 {
        font-size: 40px;
        line-height: 20px;
    }
    section p {
        font-size: 16px;
        line-height: 25px;
    }
    .main {
        width: 90%;
        flex-direction: column;
        padding: 10px;
    }
    .focus {
        width: 95%;
        margin: 10px auto;
        height: 450px;
    }






}



</style>