<template>
    <section>
        <div class="main">
            <div class="logo">
    
            </div>
            <div v-on:click="dropDown" class="menu">
    
            </div>
            <div class="cont">
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
            </div>  
        </div>

        <div v-show="drop" class="drop-down"></div>

    </section>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            drop: false
        }
    },
    methods: {
        dropDown() {
            this.drop = !this.drop
        }
    }
}
</script>


<style scoped>
.main {
    width: 100%;
    height: 23vh;
    border: 3px solid red;
    background: pink;
    padding: 70px 30px 0px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
}
.logo {
    width: 400px;
    height: 80px;
    border: 2px solid green;
}

.cont {
    width: 1100px;
    height: 90px;
    border: 4px solid khaki;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.options {
    width: 900px;
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




@media screen and (max-width: 450px) {
    .main {
        height: auto;
        padding: 40px 5px;
        overflow: hidden;
        justify-content: space-between  ;
    }
    .logo {
        width: 300px;
    }

    .menu {
        border: 2px solid red;
        width: 60px;
        height: 60px;
    }
    .cont {
        width: 100%;
        height: auto;
        flex-direction: column;
        display: none;
    }
    .options {
        width: 100%;
        height: auto;
        text-align: left;
        padding: 0px;
    }
    .options ul li {
        display: block;
        margin: 0px 5px;
        line-height: 40px;
    }
    .login {
        margin-left: 5px;
    }




    .drop-down {
        width: 300px;
        height: 500px;
        border: 3px solid blue;
        background: powderblue;
        position: absolute;
    }




















}
</style>