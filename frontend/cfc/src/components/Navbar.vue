<template>
  <section>
    <div class="main">
      <div class="logo">
        <img class="sherrr" src="../assets/lala.png" />
      </div>
      <div v-on:click="dropDown" class="menu">
        <Menu />
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
          <button>
            <router-link to="/login" class="button-link">Login</router-link>
          </button>
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
import Menu from "vue-material-design-icons/Menu.vue";

export default {
  name: "Navbar",
  data() {
    return {
      drop: false,
    };
  },
  methods: {
    dropDown() {
      this.drop = !this.drop;
    },
  },
  components: {
    Menu,
  },
};
</script>


<style scoped>
.main {
  width: 100%;
  height: 9.375rem;
  padding: 1.875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}
.logo {
  width: 15.625rem;
  height: 4.375rem;
  padding-top: 15px;
  border-right: 3px solid aquamarine;
  border-bottom: 2px solid aquamarine;
}
.sherrr {
  width: 100%;
  height: 70%;
  object-fit: cover;
}
.menu {
  display: none;
}

.cont {
  width: auto;
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.options {
  width: 40rem;
  height: 4.375rem;
  padding: 0.625rem;
}
.options ul li {
  display: inline-block;
  margin: 0rem 1.5625rem;
  position: relative;
  left: 0rem;
  transition: 0.2s;
  font-size: 1.0625rem;
}
.options ul li:hover {
  left: 0.1875rem;
  color: #42826d;
  cursor: pointer;
}
.login {
  width: 10rem;
  height: 3.75rem;
  margin-top: 0.625rem;
  margin-left: 5rem;
}
.login button {
  width: 9.375rem;
  height: 3.4375rem;
  background: #f9f9f9;
  color: white;
  border: 1px solid aquamarine;
  font-size: 1.25rem;
  border-radius: 1.6875rem;
  transition: 0.5s;
}
.login button:hover {
  background: aquamarine;
}
.button-link {
  text-decoration: none;
  color: black;
  transition: 0.3s;
}
.button-link:hover {
  color: white;
}

@media screen and (max-width: 850px) {
  .main {
    height: 8.125rem;
    padding: 1.5625rem;
  }
  .logo {
    width: 10.625rem;
    height: 3.75rem;
  }
  .cont {
    height: 3.75rem;
  }

  .options {
    width: auto;
    padding: 0.3125rem;
    height: 3.75rem;
  }
  .options ul li {
    margin: 0rem 0.3125rem;
  }
  .login {
    width: 6.25rem;
    height: 2.5rem;
    margin-left: 0.625rem;
    margin-top: 0.4375rem;
  }
  .login button {
    width: 5.625rem;
    height: 2.5rem;
    border-radius: 1.25rem;
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
    display: inline;
    border: 2px solid red;
    width: 60px;
    height: 60px;
    font-weight: bolder;
    color: aquamarine;
    font-size: 40px;
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
    height: 250px;
    border: 1px solid aquamarine;
    background: #ddfff4;
    position: absolute;
    text-align: left;
    overflow: hidden;
    animation-name: dropd;
    animation-duration: 0.5s;
    animation-timing-function: ease;
  }
  .dropdown-leave-from {
    height: 220px;
  }
  .dropdown-leave-to {
    height: 0px;
  }
  .dropdown-leave-active {
    transition: height 0.4s ease;
  }

  .drop-down ul li {
    list-style-type: none;
    font-size: 18px;
    line-height: 40px;
  }
}
</style>