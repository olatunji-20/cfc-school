<template>
  <section class="main">
    <h1>Update Student Information</h1>
    <div class="form">
        <updateform />
    </div>
  </section>
</template>

<script>
import Updateform from '../components/Updateform.vue'
export default {
  components: { Updateform },
    name: 'Update',
    data() {
        return {}
    }

}
</script>

<style scoped>
.main {
    border: 3px solid red;
    width: 90%;
    height: auto;
    margin: 0px auto;
    padding: 20px;
}

h1 {
    font-size: 50px;
}

.form {
    width: 90%;
    height: auto;
    border: 6px solid green;
    margin: 60px auto;
    padding: 20px;
}

</style>