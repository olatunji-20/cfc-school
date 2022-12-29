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

        <div v-show="drop" class="drop-down">
            <ul> 
                <li>Study Room</li>
                <li>Discord Server</li>
                <li>Study Statistics</li>
                <li>Login</li>
            </ul>
        </div>

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
    height: 150px;
    border: 3px solid black;
    background: pink;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
}
.logo {
    width: 250px;
    height: 70px;
    border: 2px solid green;
}

.cont {
    width: auto;
    height: 70px;
    border: 2px solid khaki;
    /* padding: 5px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.options {
    width: 40rem;
    height: 70px;
    border: 2px solid black;
    padding: 10px;
}
.options ul li {
    display: inline-block;
    margin: 0px 25px;
    font-size: 17px;
}
.login {
    width: 160px;
    height: 70px;
    border: 2px solid blue;
    margin-left: 80px;
}
.login button {
    width: 150px;
    height: 60px;
    border: 1px solid red;
    font-size: 24px;
    border-radius: 35px;
}




@media screen and (max-width: 450px) {
    .main {
        height: auto;
        padding: 40px 1px;
        overflow: hidden;
        justify-content: space-between;
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
        height: 250px;
        border: 3px solid blue;
        background: powderblue;
        position: absolute;
        text-align: left;
    }

    .drop-down ul li {
        list-style-type: none;
        font-size: 18px;
        line-height: 40px;
    }




















}
</style>