<template>
  <h1>{{ student.name }}</h1>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Full",
  data() {
    return {
      // student: {},
    }
  },
  computed: {
    ...mapState("student", ["student"])
  },
  methods: {
    ...mapActions("student", ["getStudent"])
  },
  mounted() {
    console.log(this.$route.params.studentId);
    console.log("MOUNTED!!!!!!!!!!!!!!!!!!!!")
    this.getStudent(this.$route.params.studentId);
    console.log(student)
    // try {
    //   async function getStudent(studentId) {
    //     const res = await axios.get(`http://localhost:3000/api/v1/students/${studentId}`);
    //     this.student = await res.json();
    //     console.log(this.student)
    //   }
    // } catch(error) {
    //   console.log(error)
    // }
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
</style>