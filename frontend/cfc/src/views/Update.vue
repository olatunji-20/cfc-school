<template>
  <section>
    <Navbar />
    <section class="mainn">
      <h1>Update Student Information</h1>
      <div class="form">
          <updateform />
      </div>
    </section>    
    <Footbar />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Updateform from '../components/Updateform.vue'
import Footbar from '../components/Footbar.vue'
export default {
    name: 'Update',
    data() {
        return {}
    },
    components: {
      Navbar,
      Updateform,
      Footbar
    },

}
</script>

<style scoped>
.mainn {
    /* width: 90%; */
      /* height: auto; */
      padding: 100px 20px;
}

h1 {
    font-size: 35px;
}

.form {
    width: 90%;
    height: auto;
    border: 6px solid green;
    margin: 10px auto;
    padding: 20px;
}

</style>