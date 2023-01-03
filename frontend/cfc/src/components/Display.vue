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
      <!-- <h4>id: {{ student.id }}</h4> -->
      <h4>Name: {{ student.name }}</h4>
      <h4>E-mail: {{ student.email }}</h4>
      <h4>Department: {{ student.department }}</h4>
      <h4>Class: {{ student.form }}</h4>
    </div>
    <!-- <div class="del">
      <Delete :id="student.id" />
    </div> -->
    <!-- <h1><router-link :to="'/full/' + student.id">view</router-link></h1> -->
    <p v-on:click="showclickEmit(student.id)" class="more">view more</p>
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
.student {
  border: 1px solid black;
  width: 90%;
  height: 180px;
  margin: 50px auto;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.picture {
  width: 200px;
  height: 100%;
  border: 2px solid black;
}

.student-image {
  width: 100%;
  height: 100%;
}

.about {
  border: 2px solid brown;
  width: 320px;
  height: 100%;
  text-align: left;
  padding: 0px 20px;
}
.about h4 {
  line-height: 14px;
}
/* .del {
  border: 1px solid red;
  height: 50px;
  width: 50px;
  position: relative;
  top: 35%;
} */

.more {
  width: auto;
  height: 40px;
  padding: 10px;
  background: red;
  position: relative;
  top: 100px;
}
.more:hover {
  text-decoration: underline;
  cursor: pointer;
}



@media screen and (max-width: 500px) {
  .student {
    width: 100%;
    height: auto;
  }
  .picture {
    width: 150px;
    height: 150px;
  }
  .about {
    margin-top: 15px;
    padding: 0px 5px;
  }
  .about h4 {
    line-height: 8px;
  }
  /* .more {
    display: none;
  } */






  .more {
    top: 0px;
  }





}
</style>