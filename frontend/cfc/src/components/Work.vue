<template>
  <section>
    <h1>How It Works</h1>
    <p>
      It's time to choose wisely your learning platform. Bimble has professional
      <br />
      mentors and instructors that always helps you to grow up your career.
    </p>
    <div class="main">
      <div class="focus">
        <router-link class="link" to="/allstudents">
          <div class="purpose">
            <div class="purp"><list-status /></div>
          </div>
          <h3>View all Students</h3>
          <p>
            Take a good look at all the students that have taken the bold move
            to sign up with us.<br />
            It is always good to be well organized.
          </p>
        </router-link>
      </div>
      <div class="focus">
        <router-link class="link" to="/signup">
          <div class="purpose">
            <div class="purp"><account-plus /></div>
          </div>
          <h3>Add a new student</h3>
          <p>
            We always stay organised for what we want to teach people. It is
            always good to be well organized.
          </p>
        </router-link>
      </div>
      <div class="focus">
        <router-link class="link" to="/update-student">
          <div class="purpose">
            <div class="purp"><account-details /></div>
          </div>
          <h3>Update student info</h3>
          <p>
            We always stay organised for what we want to teach people. It is
            always good to be well organized.
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ListStatus from "vue-material-design-icons/ListStatus.vue";
import AccountPlus from "vue-material-design-icons/AccountPlus.vue";
import AccountDetails from "vue-material-design-icons/AccountDetails.vue";

export default {
  name: "Work",
  components: {
    ListStatus,
    AccountPlus,
    AccountDetails,
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: auto;
  padding: 1.25rem 3.125rem;
}
section h1 {
  font-size: 3.125rem;
  line-height: 1.25rem;
}
section p {
  font-size: 1.0625rem;
  line-height: 1.3125rem;
}
.main {
  width: 90%;
  height: auto;
  margin: 3.125rem auto;
  padding: 0.9375rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.focus {
  border-radius: 0.5rem;
  width: 16.25rem;
  height: 26.25rem;
  background: #f9f9f9;
  padding: 0.625rem;
  position: relative;
  top: 0.0625rem;
}
.focus:hover {
  top: 0.625rem;
  transition: all 0.3s ease;
  border: 0px;
  box-shadow: 0.06rem 0.06rem 0.3rem 0.06rem #999999;
}
.focus p {
  font-size: 1cd crem;
}
.link {
  text-decoration: none;
  color: black;
}
.purpose {
  width: 9.375rem;
  height: 9.375rem;
  background: #7fffd4;
  border-radius: 1.25rem;
  margin: 1.25rem auto 3.125rem;
  padding: 0.125rem;
}

@keyframes rotor {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.purp {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #009965;
  margin: 1.875rem auto;
  color: white;
  padding: 28px 21px;
  animation-name: rotor;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@media screen and (max-width: 850px) {
  .main {
    width: 95%;
  }
}

@media screen and (max-width: 500px) {
  section {
    padding: 10px;
  }
  section h1 {
    font-size: 40px;
    line-height: 20px;
  }
  section p {
    font-size: 16px;
    line-height: 25px;
  }
  .main {
    width: 90%;
    flex-direction: column;
    padding: 10px;
  }
  .focus {
    width: 95%;
    margin: 10px auto;
    height: 450px;
  }
}
</style>