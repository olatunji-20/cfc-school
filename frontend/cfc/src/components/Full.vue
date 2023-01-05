<template>
  <section class="main">
    <!-- <h3>YOU ARE HIGHLY WELCOME</h3> -->
    <div class="submain">
      <div v-on:click="close" class="close"><p>close</p></div>
      <div class="student-image">
        <img :src="'http://localhost:3000/src/school/student-images/' + popStudent.email + popStudent.image" alt="" class="student">
      </div>
      <h3>student name: </h3> <p> {{ popStudent.name }}</p><br />
      <h3>student email: </h3> <p> {{ popStudent.email }}</p><br />
      <h3>student class: </h3> <p> {{ popStudent.name }}</p><br />
      <h3>student department: </h3> <p> {{ popStudent.department }}</p><br />
      <h3>student phone no: </h3> <p> {{ popStudent.phone }}</p><br />
      <h3>student date-of-birth: </h3> <p> {{ popStudent.dob }}</p><br />
      <div class="del">
        <Delete :id="popStudent.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Delete from '../components/Delete.vue'
export default {
  name: "Full",
  data() {
    return {}
  },
  components: {
    Delete
  },
  props: {
    popStudent: Object
  },
  methods: {
    close() {
      this.$emit("close-pop")
    }
  },
  emits: ["close-pop"]
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* h3 {
  font-size: 20px;
  color: hotpink;
} */
.main {
  border: 5px solid orangered;
  border-radius: 40px;
  padding: 10px;
  margin: 0px;
  position: fixed;
  top:  0px;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 9;
}
.submain {
  border: 3px solid hotpink;
  margin: 60px auto;
  width: 80%;
  height: 500px;
  background: whitesmoke;
  overflow: auto;
}
.close {
  width: 50px;
  height: 50px;
  border: 3px solid red;
  background: aquamarine;
  position: fixed;
  left: 84%;
  cursor: pointer;
}
.student-image {
  width: 200px;
  height: 200px;
  border: 3px solid green;
  margin: 60px auto;
}
.student {
  width: 100%;
  height: 100%;
}
.submain h3 {
  display: inline-block;
}
.submain p {
  display: inline-block;
}




</style>