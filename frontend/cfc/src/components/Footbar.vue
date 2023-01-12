<template>
    <section class="maine">
        <div class="one">
            <h1>Study Together</h1>
            <p>Help you study more often than before.</p>
            <div class="socials">
                <div class="social"></div>
                <div class="social"></div>
                <div class="social"></div>
                <div class="social"></div>
            </div>
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
.maine {
    width: 90%;
    height: auto;
    border-top: 1px solid aquamarine;
    /* background: powderblue; */
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
.one {
    /* border: 2px solid green; */
    width: 400px;
    height: 300px;
    text-align: left;
    padding: 20px;
}
.one h1 {
    font-size: 25px;
}
.one p {
    font-size: 17px;
}
.socials {
    width: 80%;
    height: 60px;
    padding: 3px;
    margin-top: 60px;
    border: 2px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.social {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid firebrick;
}
.two, .three, .four {
    /* border: 2px solid blue; */
    width: 220px;
    height: 300px;
    text-align: left;
    padding: 20px 0px;
}
.two h4, .three h4, .four h4 {
    font-weight: bolder;
    text-indent: 30px;
    font-size: 20px;
}
.two ul li, .three ul li, .four ul li {
    list-style-type: none;
    line-height: 30px;
    position: relative;
    left: 0px;
    /* -webkit-transition: all 3s ease; */
    transition: all .3s ease;
}
.two ul li:hover, .three ul li:hover, .four ul li:hover {
    left: 10px;
    cursor: pointer;
}
.five {
    width: 100%;
    height: 80px;
    border-top: 1px solid aquamarine;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    padding: 3px;
    font-size: 20px;
}



@media screen and (max-width: 850px) {
    .main {
        width: 100%;
    }
    .one {
        width: 14rem;
        padding: 10px;
    }
    .one h1 {
        font-size: 21px;
    }
    .one p {
        font-size: 15px;
    }


    .two, .three, .four {
        width: 11rem;
        padding: 10px 0px;
    }
    .two h4, .three h4, .four h4 {
        font-size: 20px;
    }
    .two p, .three p, .four p {
        font-size: 16px;
    }









}







@media screen and (max-width: 500px) {
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
        height: 70px;
        padding: 0px;
        font-size: 18px;
    }
}

</style>