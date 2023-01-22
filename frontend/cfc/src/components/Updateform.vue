<template>
  <div>
    <div class="main">
      <h1>UPDATE FORM</h1>
      <h2>{{ message }}</h2>
      <form @submit.prevent="update(updateInfo)" enctype="multipart/form-data">
        <label>Student ID.:</label>
        <input v-model="updateInfo.id" type="number" />
        <br />
        <label>what would you like to change?</label>
        <select v-model="updateInfo.changed">
          <option>name</option>
        </select>
        <br />
        <label>The new value:</label>
        <input type="text" placeholder="new value" v-model="updateInfo.value" />
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Updateform",
  data() {
    return {
      updateInfo: {
        id: "",
        changed: "",
        value: "",
      },
    };
  },
  methods: {
    async update(updateInfo) {
      try {
        await axios.put(
          `http://localhost:3000/api/v1/students/${updateInfo.id}`,
          updateInfo
        );
        alert("student update successful");
      } catch (error) {
        alert("unsuccessful student update");
        console.log("NOT UPDATED");
      }
    },
  },
};
</script>

<style scoped>
.main {
  border: 1px solid aquamarine;
  width: 70%;
  margin: 0px auto;
  border-radius: 10px;
  height: auto;
  background: #ddfff4;
  padding: 20px;
}
h1 {
  font-size: 30px;
}
input {
  margin: 20px auto 10px 10px;
  border: 0px;
  border-radius: 5px;
  text-indent: 10px;
}
select {
  margin-left: 10px;
}
button {
  margin: 50px auto 20px;
  border: 0px;
  border-radius: 5px;
  width: 180px;
  height: 40px;
  background: aquamarine;
  color: whitesmoke;
  transition: 0.3s;
}
button:hover {
  background: #42826d;
  cursor: pointer;
}

@media screen and (max-width: 850px) {
  .main {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .main {
    width: 85%;
  }
}
</style>