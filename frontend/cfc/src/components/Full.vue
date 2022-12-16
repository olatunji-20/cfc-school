<template>
  <section class="main">
    <h3>YOU ARE HIGHLY WELCOME</h3>
    <div class="submain">
      <h3>{{ popStudent.name }}</h3>
      <h3>{{ popStudent.email }}</h3>
      <h3>{{ popStudent.name }}</h3>
      <h3>{{ popStudent.department }}</h3>
      <h3>{{ popStudent.dob }}</h3>
    </div>
  </section>
</template>

<script>

export default {
  name: "Full",
  data() {
    return {}
  },
  props: {
    popStudent: Object
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h3 {
  font-size: 20px;
  color: hotpink;
}
.main {
  border: 8px solid green;
  padding: 40px;
  margin: 60px auto;
  position: absolute;
  width: 900px;
  height: 600px;
  background: wheat;
  opacity: 0.8;
  z-index: 9;
}
.submain {
  border: 3px solid hotpink;
  margin: 90px auto;
  width: 80%;
}
</style>