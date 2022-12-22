<template>
    <section>
        <h1>How It Work</h1>
        <p>It's time to choose wisely your lerning platform. Bimble has professional <br /> mentors and instructors that always helps you to grow up your career.</p>
        <div class="main">
            <div class="focus"></div>
            <div class="focus"></div>
            <div class="focus"></div>
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
}
</style>