<template>
    <section>
        <h1>How It Work</h1>
        <p>It's time to choose wisely your lerning platform. Bimble has professional <br /> mentors and instructors that always helps you to grow up your career.</p>
        <div class="main">
            <div class="focus">
                <div class="purpose">
                    <div class="purp"></div>
                </div>
                    <h3>Set Some Goals</h3>
                    <p>We always stay organised for what we want to teach people. It is always good to be well organized.</p>
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
    border: 7px solid green;
    width: 100%;
    height: 900px;
    padding: 100px;
}
section h1 {
    font-size: 60px;
    line-height: 40px;
}
section p {
    font-size: 20px;
    line-height: 30px;
}
.main {
    border: 5px solid teal;
    width: 85%;
    height: 600px;
    margin: 50px auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.focus {
    border: 2px solid black;
    width: 350px;
    height: 500px;
    background: cornsilk;
    padding: 30px;
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
</style>