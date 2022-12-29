<template>
    <section>
        <h1>How It Work</h1>
        <p>It's time to choose wisely your learning platform. Bimble has professional <br /> mentors and instructors that always helps you to grow up your career.</p>
        <div class="main">
            <div class="focus">
                <router-link class="link" to="/signup">
                    <div class="purpose">
                        <div class="purp"></div>
                    </div>
                        <h3>Add a new student</h3>
                        <p>We always stay organised for what we want to teach people. It is always good to be well organized.</p>
                </router-link>
            </div>
            <div class="focus">
                <div class="purpose">
                    <div class="purp"></div>
                </div>
                    <h3>Join the Room</h3>
                    <p>We always stay organised for what we want to teach people. It is always good to be well organized.</p>
                </div>
            <div class="focus">
                
                <div class="purpose">
                    <div class="purp"></div>
                </div>
                    <h3>Keep Focus</h3>
                    <p>We always stay organised for what we want to teach people. It is always good to be well organized.</p>
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
    border: 2px solid blue;
    width: 100%;
    height: auto;
    padding: 50px;
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
    border: 5px solid teal;
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
    border: 2px solid black;
    width: 280px;
    height: 420px;
    background: cornsilk;
    padding: 10px;
}
.focus p {
    font-size: 17px;
}
.link {
    text-decoration: none;
    color: red;

}
.purpose {
    width: 150px;
    height: 150px;
    background: plum;
    border-radius: 20px;
    margin: 20px auto 50px;
    padding: 2px;
}
.purp {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: blue;
    margin: 30px auto;
}




@media screen  and (max-width: 450px) {
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