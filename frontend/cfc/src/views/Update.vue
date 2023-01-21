<template>
  <section>
    <!-- <transition name="message">
      <div v-show="true" class="mess">
          <p> {{ message }} jfijij </p>
      </div>
    </transition> -->

    <Navbar />

    <section class="mainn">
      <h1>Update Student Information</h1>
      <div class="form">
          <updateform />
      </div>
    </section>

    <Footbar />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Updateform from '../components/Updateform.vue'
import Footbar from '../components/Footbar.vue'
export default {
    name: 'Update',
    data() {
        return {
            message: ""
        }
    },
    methods: {},
    components: {
      Navbar,
      Updateform,
      Footbar
    },

}
</script>

<style scoped>
.mainn {
    /* width: 90%; */
      /* height: auto; */
      padding: 60px 20px;
}

h1 {
    font-size: 35px;
}

.form {
    width: 90%;
    height: auto;
    /* border: 6px solid green; */
    margin: 0px auto 30px;
    padding: 20px;
}

/* .mess {
    width: 600px;
    height: auto;
    padding: 0px 20px;
    border-radius: 4px;
    background: tomato;
    position: absolute;
    left: 26%;
    transform: translateY(150px);
    margin: 0px auto;
    z-index: 9;
    color: white;
}

.message-enter-from {
    opacity: 0;
    transform: translateY(0px);
}
.message-enter-to {
    opacity: 1;
    transform: translateY(150px);
}
.message-enter-active {
    transition: all .5s ease;
}
.message-leave-from {
    opacity: 1;
    transform: translateY(150px);
}
.message-leave-to {
    opacity: 0;
    transform: translateY(0px);
}
.message-leave-active {
    transition: all .5s ease;
} */


</style>