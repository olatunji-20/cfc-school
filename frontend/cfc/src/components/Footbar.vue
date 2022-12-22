<template>
    <section class="main">
        <div class="one">
            <h1>Study Together</h1>
            <p>Help you study more often than before.</p>
        </div>
        <div class="two">
            <p>Support</p>
            <ul>
                <li>Help center</li>
                <li>Account information</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div class="three">
            <p>Product</p>
            <ul>
                <li>Study Room</li>
                <li>Discord Server</li>
                <li>Beta test</li>
            </ul>
        </div>
        <div class="four">
            <p>Help and Solution</p>
            <ul>
                <li>Talk to support</li>
                <li>Support docs</li>
                <li>System status</li>
                <li>Cookies</li>
            </ul></div>
        <div class="five"></div>
    </section>
</template>

<script>
export default {
    name: 'Footbar'
    }
</script>


<style scoped>
.main {
    width: 85%;
    height: 500px;
    border-top: 2px solid red;
    background: powderblue;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
.one {
    border: 2px solid green;
    width: 450px;
    height: 400px;
    text-align: left;
    padding: 30px;
    font-size: 25px;
}
.two, .three, .four {
    border: 2px solid blue;
    width: 250px;
    height: 400px;
    text-align: left;
    padding: 30px 0px;
}
.two ul li, .three ul li, .four ul li {
    list-style-type: none;
    line-height: 30px;
}
.five {
    width: 100%;
    height: 100px;
    border: 2px solid black;
}
</style>