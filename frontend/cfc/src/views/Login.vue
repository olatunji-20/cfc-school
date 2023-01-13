<template>
    <section>
        <Navbar />
        <!-- <h1>LOGINd HERE</h1> -->
        <loginform />
        <Footbar />

    </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Loginform from "../components/Loginform.vue"
import Footbar from "../components/Footbar.vue";
export default {
    name: "Login",
    data() {
        return {}
    },
    components: {
        Navbar,
        Loginform,
        Footbar
    }
}
</script>

<style scoped>

</style>