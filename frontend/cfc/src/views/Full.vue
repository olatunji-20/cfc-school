<template>
  <section class="show">
    <h1>HHSHSHSHHSHSHSHSHHS</h1>
    <h2>SSJJJSJJJS</h2>
    <h2>{{ student.name }}</h2>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Full",
  data() {
    return {
      student: {},
      studentId: this.$route.params.studentId
    }
  },
  mounted() {
    async function getStudent(studentId) {
      const res = await axios.get(`http://localhost:3000/api/v1/students/${studentId}`);
      this.student = await res;
      console.log(this.student)
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.show {
  width: 900px;
  height: 400px;
  position: absolute;
  background: powderblue;
  border-radius: 20px;
  border: 15px solid red;
  margin: 30px auto;
  z-index: 9;
}
</style>