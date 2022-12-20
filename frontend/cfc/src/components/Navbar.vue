<template>
    <section class="main">
        <div class="logo">

        </div>
        <div class="options">
            <ul>
                <li>Study Room</li>
                <li>Discord Server</li>
                <li>Study Statistics</li>
            </ul>

        </div>
        <div class="login">
            <button>Login</button>
        </div>

    </section>
</template>

<style scoped>
.main {
    width: 100%;
    height: 250px;
    border: 3px solid red;
    background: pink;
    padding: 70px 50px 0px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.logo {
    width: 400px;
    height: 80px;
    border: 2px solid green;
}
.options {
    width: 800px;
    height: 80px;
    border: 2px solid black;
    padding: 10px;
}
.options ul li {
    display: inline-block;
    margin: 0px 45px;
    font-size: 22px;
}
.login {
    width: 180px;
    height: 80px;
    border: 2px solid blue;
    margin-left: 80px;
}
.login button {
    width: 150px;
    height: 70px;
    border: 1px solid red;
    font-size: 24px;
    border-radius: 35px;
}
</style>