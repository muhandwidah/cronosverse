<template>
  <v-app>
    <div
      id="bg"
      :style="{
        backgroundImage:
          'url(https://imageio.forbes.com/specials-images/imageserve/617170f50839cb7fbf7b3e5c/0x0.jpg?format=jpg&crop=3217,1810,x168,y0,safe&fit=crop)',
      }"
    >
      <navbar />
      <div id="textcontainer">
        <h1 id="maintexxt">
          The ULTIMATE social MMO gaming experience for the entire Cronos
          community.
        </h1>
        <router-link :to="{ path: '/about' }">
        <v-btn
        >
          Enter <v-icon
          dark
          left
        >
          mdi-arrow-right
        </v-icon></v-btn
        >
        </router-link>
      </div>
    </div>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "landing",

  data() {
    return {};
  },

  mounted() {},

  components: {
    navbar,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
#bg {
  height: 100vh;
}
#textcontainer {
  width: 700px;
  left: 7%;
  top: 10%;
  position: relative;
  z-index: 2;
}
h1 {
  color: white;
  font-family: "Russo One", sans-serif;
  font-size: 50px;
}
a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; }


a:active { text-decoration: none; }
</style>
