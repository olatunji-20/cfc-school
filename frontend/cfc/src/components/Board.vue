<template>
  <section class="main">
    <div v-for="student in students" :key="student.id">
      <Display v-on:show-click="clickShow(student.id)" :student="student" />
    </div>
  </section>
</template>

<script>
import Display from "./Display.vue";
import Full from "./Full.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Board",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("student", ["students", "student"]),
  },
  components: {
    Display,
    Full,
  },
  methods: {
    ...mapActions("student", ["getStudents", "getStudent"]),
    clickShow(id) {
      this.$emit("show-pop", id);
      console.log("pepepepe" + " " + id);
      this.getStudent(id);
    },
  },
  emits: ["show-pop"],
  async created() {
    this.students = await this.getStudents();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  border: 2px solid #f9f9f9;
  height: auto;
  width: 65%;
  margin: 80px auto 150px;
}

@media screen and (max-width: 500px) {
  .main {
    width: 95%;
    margin: 60px auto 100px;
  }
}
</style>