<template>
  <section class="main">
    <h3>YOU ARE HIGHLY WELCOME</h3>
    <div class="submain">
      <h1>{{ singleStudent.email }}</h1>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Full",
  data() {
    return {}
  },
  computed: {
    ...mapState("student", ["singleStudent"])
  },
  methods: {
    ...mapActions("student", ["getStudent"])
  },
  mounted() {
    try {
      console.log("MOUNTED!!!!!!!!!!!")
      this.getStudent(this.$route.params.studentId);
      alert(student)
    } catch (error) {
      console.log(error)
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  font-size: 50px;
  color: hotpink;
}

.main {
  border: 5px solid green;
  padding: 40px;
  margin: 60px auto;
}
.submain {
  border: 3px solid hotpink;
  margin: 90px auto;
  width: 80%;
}
</style>