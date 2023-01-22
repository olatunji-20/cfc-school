<template>
  <section class="maine">
    <div class="one">
      <h1>Study Together</h1>
      <p>Help you study more often than before.</p>
      <div class="socials">
        <div class="social"><Facebook /></div>
        <div class="social"><Twitter /></div>
        <div class="social"><Youtube /></div>
        <div class="social"><Instagram /></div>
      </div>
    </div>
    <div class="two">
      <h4>Support</h4>
      <ul>
        <li>Help center</li>
        <li>Account information</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
    <div class="three">
      <h4>Product</h4>
      <ul>
        <li>Study Room</li>
        <li>Discord Server</li>
        <li>Beta test</li>
      </ul>
    </div>
    <div class="four">
      <h4>Help and Solution</h4>
      <ul>
        <li>Talk to support</li>
        <li>Support docs</li>
        <li>System status</li>
        <li>Cookies</li>
      </ul>
    </div>
    <div class="five">
      <h4>© FALANA SHERIFF OLATUNJI</h4>
    </div>
  </section>
</template>

<script>
import Facebook from "vue-material-design-icons/Facebook.vue";
import Twitter from "vue-material-design-icons/Twitter.vue";
import Youtube from "vue-material-design-icons/Youtube.vue";
import Instagram from "vue-material-design-icons/Instagram.vue";

export default {
  name: "Footbar",
  components: {
    Facebook,
    Twitter,
    Youtube,
    Instagram,
  },
};
</script>


<style scoped>
.maine {
  width: 90%;
  height: auto;
  border-top: 1px solid aquamarine;
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.one {
  width: 25rem;
  height: 18.75rem;
  text-align: left;
  padding: 1.25rem;
}
.one h1 {
  font-size: 1.5625rem;
}
.one p {
  font-size: 1.0625rem;
}
.socials {
  width: 80%;
  height: 3.75rem;
  padding: 0.1875rem;
  margin-top: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.social {
  width: 3.125rem;
  height: 3.25rem;
  border-radius: 50%;
  border: 1px solid #999999;
  color: aquamarine;
  padding: 15px 12px;
  transition: 0.3s;
}
.social:hover {
  border: 1px solid aquamarine;
  cursor: pointer;
}
.two,
.three,
.four {
  width: 13.75rem;
  height: 18.75rem;
  text-align: left;
  padding: 20px 0px;
}
.two h4,
.three h4,
.four h4 {
  font-weight: bolder;
  text-indent: 1.875rem;
  font-size: 1.25rem;
}
.two ul li,
.three ul li,
.four ul li {
  list-style-type: none;
  line-height: 1.875rem;
  position: relative;
  left: 0rem;
  transition: all 0.3s ease;
}
.two ul li:hover,
.three ul li:hover,
.four ul li:hover {
  left: 0.625rem;
  cursor: pointer;
}
.five {
  width: 100%;
  height: 5rem;
  border-top: 1px solid aquamarine;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding: 0.1875rem;
  font-size: 1.25rem;
}

@media screen and (max-width: 850px) {
  .main {
    width: 100%;
  }
  .one {
    width: 14rem;
    padding: 0.625rem;
  }
  .one h1 {
    font-size: 1.3125rem;
  }
  .one p {
    font-size: 0.9375rem;
  }

  .two,
  .three,
  .four {
    width: 11rem;
    padding: 0.625rem 0rem;
  }
  .two h4,
  .three h4,
  .four h4 {
    font-size: 1.25rem;
  }
  .two p,
  .three p,
  .four p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 500px) {
  .main {
    width: 100%;
    flex-direction: column;
  }
  .one {
    width: 100%;
  }
  .two,
  .three,
  .four {
    width: 100%;
    height: auto;
    padding: 20px 0px;
  }
  .five {
    height: 70px;
    padding: 0px;
    font-size: 18px;
  }
}
</style>