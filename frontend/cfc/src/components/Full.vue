<template>
  <section class="main">
    <div class="submain">
      <div v-on:click="close" class="close"><p>close</p></div>
      <div class="student-image">
        <img
          :src="
            'http://localhost:3000/src/school/student-images/' +
            popStudent.email +
            popStudent.image
          "
          alt=""
          class="student"
        />
      </div>
      <h3>student name:</h3>
      <p>{{ popStudent.name }}</p>
      <br />
      <h3>student email:</h3>
      <p>{{ popStudent.email }}</p>
      <br />
      <h3>student class:</h3>
      <p>{{ popStudent.name }}</p>
      <br />
      <h3>student department:</h3>
      <p>{{ popStudent.department }}</p>
      <br />
      <h3>student phone no:</h3>
      <p>{{ popStudent.phone }}</p>
      <br />
      <h3>student date-of-birth:</h3>
      <p>{{ popStudent.dob }}</p>
      <br />
      <div class="del">
        <Delete :id="popStudent.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Delete from "../components/Delete.vue";
export default {
  name: "Full",
  data() {
    return {};
  },
  components: {
    Delete,
  },
  props: {
    popStudent: Object,
  },
  methods: {
    close() {
      this.$emit("close-pop");
    },
  },
  emits: ["close-pop"],
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.main {
  border: 2px solid green;
  padding: 10px;
  margin: 0px;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9;
}
.submain {
  border: 2px solid #42826d;
  margin: 60px auto;
  width: 70%;
  height: 500px;
  background: whitesmoke;
  overflow: auto;
}
.close {
  width: 40px;
  height: 40px;
  border: 3px solid red;
  background: aquamarine;
  position: fixed;
  left: 80%;
  cursor: pointer;
}
.student-image {
  width: 150px;
  height: 150px;
  border: 2px solid aquamarine;
  border-radius: 5px;
  margin: 50px auto 30px;
}
.student {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.submain h3 {
  display: inline-block;
}
.submain p {
  display: inline-block;
}
</style>