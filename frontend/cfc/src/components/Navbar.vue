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
                    <button><router-link to="/login" class="button-link">Login</router-link></button>
                </div>
            </div>  
        </div>
        <transition name="dropdown">
            <div v-show="drop" class="drop-down">
                <ul> 
                    <li>Study Room</li>
                    <li>Discord Server</li>
                    <li>Study Statistics</li>
                    <li>Login</li>
                </ul>
            </div>
        </transition>

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
    /* border: 3px solid black; */
    /* background: pink; */
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
}
.logo {
    width: 250px;
    height: 70px;
    border: 1px solid green;
    border-right: 5px solid blue;
    background: whitesmoke;
}

.cont {
    width: auto;    
    height: 70px;
    /* border: 2px solid khaki; */
    /* padding: 5px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.options {
    width: 40rem;
    height: 70px;
    /* border: 2px solid black; */
    padding: 10px;
}
.options ul li {
    display: inline-block;
    margin: 0px 25px;
    /* text-decoration: none; */
    position: relative;
    left: 0px;
    transition: .2s;
    font-size: 17px;
}
.options ul li:hover {
    /* text-decoration: underline; */
    left: 3px;
    color: aquamarine;
    cursor: pointer;
}
.login {
    width: 160px;
    height: 60px;
    margin-top: 10px;
    margin-left: 80px;
}
.login button {
    width: 150px;
    height: 55px;
    border: 1px solid black;
    font-size: 20px;
    border-radius: 35px;
    transition: .6s;
}
.login button:hover {
    background: tomato;
    color: white;
}
.button-link {
    text-decoration: none;
}




@media screen and (max-width: 850px) {
    .main {
        height: 130px;
        padding: 25px;
    }
    .logo {
        width: 170px;
        height: 60px;
    }
    .cont {
        height: 60px;
    }

    .options {
        width: auto;
        padding: 5px;
        height: 60px;
    }
    .options ul li {
        margin: 0px 5px;
    }
    .login {
        width: 100px;
        height: 40px;
        margin-left: 10px;
        margin-top: 7px;
    }
    .login button {
        width: 90px;
        height: 40px;
        border-radius: 20px;
    }



}












@media screen and (max-width: 500px) {
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


    /* .dropdown-enter-from {
        opacity: 0;
        height: 10px;
    }
    .dropdown-enter-to {
        opacity: 1;
        height: 100px;
    }
    .dropdown-enter-active {
        transition: all 4s ease;
    } */
    
    

@keyframes dropd {
    0% {
        height: 0px;
    }
    100% {
        height: 220px;
    }
}
    .drop-down {
        width: 230px;
        height: 220px;
        border: 3px solid blue;
        background: powderblue;
        position: absolute;
        text-align: left;
        overflow: hidden;
        animation-name: dropd;
        animation-duration: .5s;
        animation-timing-function: ease;
    }
    .dropdown-leave-from {
        height: 220px;
    }
    .dropdown-leave-to {
        height: 0px;
    }
    .dropdown-leave-active {
        transition: height .4s ease;
    }

    .drop-down ul li {
        list-style-type: none;
        font-size: 18px;
        line-height: 40px;
    }




















}
</style>