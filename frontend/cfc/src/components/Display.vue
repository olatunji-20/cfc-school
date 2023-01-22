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
      <h4>Name:</h4>
      <p>{{ student.name }}</p>
      <br />
      <h4>E-mail:</h4>
      <p>{{ student.email }}</p>
      <br />
      <h4>Department:</h4>
      <p>{{ student.department }}</p>
      <br />
      <h4>Class:</h4>
      <p>{{ student.form }}</p>
      <br />
    </div>
    <p v-on:click="showclickEmit(student.id)" class="more">view</p>
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
      this.$emit("show-click", id);
    },
  },
  components: {
    Delete,
  },
  emits: ["show-click"],
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.student {
  border: 1px solid aquamarine;
  width: 90%;
  height: 180px;
  margin: 50px auto;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  transition: 0.3s;
}
.student:hover {
  box-shadow: 0.06rem 0.06rem 0.3rem 0.06rem aquamarine;
}
.picture {
  width: 200px;
  height: 100%;
  border-radius: 3px;
}

.student-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}

.about {
  border: 1px solid aquamarine;
  border-radius: 3px;
  width: 320px;
  height: 100%;
  text-align: left;
  padding: 25px 20px;
}
.about h4 {
  line-height: 30px;
  display: inline;
}
.about p {
  display: inline;
  line-height: 30px;
}

.more {
  width: auto;
  height: 40px;
  padding: 10px;
  background: #42826d;
  border-radius: 3px;
  transition: 0.3s;
  color: white;
  position: relative;
  top: 100px;
}
.more:hover {
  background: grey;
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
  .more {
    top: 0px;
  }
}
</style>