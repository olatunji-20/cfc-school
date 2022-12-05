<template>
  <section class="show">
    <h1>HHSHSHSHHSHSHSHSHHS</h1>
    <h2>{{ student.name }}</h2>
    <h2>{{ student.email }}</h2>
  </section>
</template>

<script>
export default {
  name: "Full",
  data() {
    return {};
  },
  props: {
    student: Object
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