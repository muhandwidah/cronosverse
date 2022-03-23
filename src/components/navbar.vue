<template>
  <div>
    <div id="logocontainer">
      <v-img id="logo" max-width="500" src="../assets/logo.png"></v-img>
    </div>
    <div id="btncontainer">
      <router-link :to="{ path: '/' }">
        <v-btn id="navbtn" class="white--text" text color="white">Home</v-btn>
      </router-link>
      <router-link :to="{ path: '/about' }">
        <v-btn id="navbtn" class="white--text" text color="white">About</v-btn>
      </router-link>
      <router-link :to="{ path: '/landtiles' }">
        <v-btn id="navbtn" class="white--text" text color="white"
          >Land Tiles</v-btn
        >
      </router-link>
      <router-link :to="{ path: '/faq' }">
        <v-btn id="navbtn" class="white--text" text color="white">faq</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
#logo {
  margin: auto;
}
#navbtn {
  left: 41.5%;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
/* @media only screen and (max-device-width: 950px) {
  #navbtn {
    left: 30%
  }
} */
</style>
