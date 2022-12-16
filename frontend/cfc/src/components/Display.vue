<template>
  <section class="student">
    <div class="picture">
      <img
        :src="
          'http://localhost:3000/src/school/student-images/' +
          student.email +
          student.image
        "
        :alt="student.name"
        class="student-image"
      />
    </div>
    <div class="about">
      <h4>id: {{ student.id }}</h4>
      <h4>Name: {{ student.name }}</h4>
      <h4>E-mail: {{ student.email + student.image }}</h4>
      <h4>department: {{ student.department }}</h4>
    </div>
    <div class="del">
      <Delete :id="student.id" />
    </div>
    <!-- <h1><router-link :to="'/full/' + student.id">view</router-link></h1> -->
    <h1 v-on:click="showclickEmit(student.id)">click</h1>
  </section>
</template>

<script>
import Delete from "./Delete.vue";

export default {
  name: "Display",
  data() {
    return {};
  },
  props: {
    student: Object,
  },
  methods: {
    showclickEmit(id) {
      this.$emit("show-click", id)
    }
  },
  components: {
    Delete
  },
  emits: ["show-click"]
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  border: 3px solid salmon;
}




.student {
  border: 4px solid purple;
  width: 90%;
  height: 250px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.picture {
  width: 35%;
  height: 100%;
  border: 2px solid black;
}

.student-image {
  width: 100%;
  height: 100%;
}

.about {
  border: 2px solid brown;
  width: 40%;
  height: 100%;
  text-align: left;
  padding-left: 20px;
}

.del {
  border: 1px solid red;
  height: 50px;
  width: 50px;
  position: relative;
  top: 35%;
}

.more {
  width: 70px;
  height: 70px;
  background: red;
}

</style>