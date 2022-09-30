<template>
    <section>
        <header>
            <div class="logo-container"></div>
            <div class="signs">
                <ul>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </header>
        <h1> CFC schools</h1>

        <h3><router-link to="/signup">Add a new student.</router-link></h3>

    </section>
</template>

<script>
    export default {
        name: 'Homepage',
        data() {

        },
    }
</script>

<style scoped>
    section {
        border: 2px solid red;
        width: 100%;
        height: 900px;
    }

    header {
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
    }

    .signs {
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
    }

    h1  {
        text-align: center;
    }

</style>