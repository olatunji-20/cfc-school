<template>
  <section>
    <h1>HHSHSHSHHSHSHSHSHHS</h1>
    <h3>{{ student.name }}</h3>
    <h3>{{ student.email }}</h3>
  </section>
</template>

<script>
export default {
    name: 'Full',
    data() {
        return {

        }
    },
    props: {
        student: Object
    }

}
</script>

<style scoped>
section {
    width: 80%;
    height: 500px;
    border: 5px solid fuchsia;
    position: fixed;
    margin: 10px auto;
    background: powderblue;
    z-index: 9;
}
</style>