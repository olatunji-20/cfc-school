<template>
  <div class="main">
    <h1>UPDATE FORM</h1>
    <form @submit.prevent="update(updateInfo)" enctype="multipart/form-data">
      <label>Student ID.</label>
      <input v-model="updateInfo.id" type="number" />
      <br />
      <label>what would you like to change?</label>
      <select v-model="updateInfo.changed">
        <option>name</option>
        <!-- <option>b</option>
        <option>c</option>
        <option>d</option> -->
      </select>
      <br />
      <label>The new value</label>
      <input type="text" placeholder="new value" v-model="updateInfo.value" />
      <br />
        <button>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Updateform",
  data() {
    return {
        updateInfo: {
            id: "",
            changed: "",
            value: "",
        }
    }
  },
  methods: {
    async update(updateInfo) {
      console.log("updated", updateInfo.id)
      try {
          await axios.put(`http://localhost:3000/api/v1/students/${updateInfo.id}`, updateInfo)
            console.log("updated")
        } catch (error) {
            console.log("NOT UPDATED")
        }
    }
  }
};
</script>

<style scoped>
.main {
  border: 3px solid blue;
  width: 100%;
  height: auto;
  background: powderblue;
  padding: 20px;
}
h1 {
  font-size: 30px;
}
</style>