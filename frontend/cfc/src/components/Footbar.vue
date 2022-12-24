<template>
    <section class="main">
        <div class="one">
            <h1>Study Together</h1>
            <p>Help you study more often than before.</p>
        </div>
        <div class="two">
            <h4>Support</h4>
            <ul>
                <li>Help center</li>
                <li>Account information</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div class="three">
            <h4>Product</h4>
            <ul>
                <li>Study Room</li>
                <li>Discord Server</li>
                <li>Beta test</li>
            </ul>
        </div>
        <div class="four">
            <h4>Help and Solution</h4>
            <ul>
                <li>Talk to support</li>
                <li>Support docs</li>
                <li>System status</li>
                <li>Cookies</li>
            </ul></div>
        <div class="five">
            <h4>FALANA SHERIFF OLATUNJI</h4>
        </div>
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
    height: auto;
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
    font-size: 20px;
}
.two h4, .three h4, .four h4 {
    font-weight: bolder;
    text-indent: 35px;
}
.two ul li, .three ul li, .four ul li {
    list-style-type: none;
    line-height: 35px;
}
.five {
    width: 100%;
    height: 100px;
    border: 2px solid black;
    padding: 5px;
    font-size: 25px;
}

@media screen and (max-width: 450px) {
    .main {
        width: 100%;
        flex-direction: column;
    }
    .one {
        width: 100%;
    }
    .two, .three, .four {
        width: 100%;
        height: auto;
        padding: 20px 0px;
    }
    .five {
        height: 80px;
        padding: 0px;
        font-size: 20px;
    }
}

</style>