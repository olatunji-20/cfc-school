<template>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- <router-view/> -->
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px !important;
  }

#app {
  font-family: 'Poppins', Arial, sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.route-enter-from {
  opacity: 0;
  transform: translateX(100px)
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
