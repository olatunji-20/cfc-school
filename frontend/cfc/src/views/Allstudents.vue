<template>
  <section>
    <Navbar />
    <transition name="pop">
      <Full
        v-on:close-pop="popHide()"
        v-show="showClick"
        :popStudent="student"
      />
    </transition>
    <h1>Here is a list of all the students in CFC-SCHOOL.</h1>
    <Board v-on:show-pop="popShow(student.id)" />
    <Footbar />
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Full from "../components/Full.vue";
import Board from "../components/Board.vue";
import Footbar from "../components/Footbar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Allstudent",
  data() {
    return {
      showClick: false,
    };
  },
  components: {
    Navbar,
    Board,
    Full,
    Footbar,
  },
  computed: {
    ...mapGetters("student", ["student"]),
  },
  methods: {
    popShow(id) {
      console.log("lalalala" + " " + id);
      this.showClick = true;
    },
    popHide() {
      this.showClick = false;
    },
  },
};
</script>

<style scoped>
section {
  height: auto;
  text-align: center;
}
section h1 {
  margin-top: 70px;
  font-size: 35px;
}
.pop-enter-from {
  opacity: 0;
}
.pop-enter-to {
  opacity: 1;
}
.pop-enter-active {
  transition: opacity 0.4s ease;
}
.pop-leave-from {
  opacity: 1;
}
.pop-leave-to {
  opacity: 0;
}
.pop-leave-active {
  transition: opacity 0.4s ease;
}

@media screen and (max-width: 500px) {
  section h1 {
    margin-top: 80px;
    font-size: 30px;
  }
}
</style>