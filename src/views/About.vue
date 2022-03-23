<template>
  <v-app>
    <div
      id="bodycontainer"
      :style="{
        backgroundImage: 'url(https://i.ibb.co/QYS6RQx/image-1.png)',
      }"
    >
      <div id="navcontainer">
        <navbar />
        <div id="cronoscontainer">
          <h1>About the CronosVerse</h1>
          <p>
            The CronosVerse aims to be the first true metaverse project on the
            Cronos blockchain. Our goal is to create the ultimate social MMO
            gaming experience for the entire Cronos community.
          </p>
          <p>
            You will beable to participate as either land owners or as everyday
            civilians of the CronosVerse, known as the "Crovilians." Each
            Crovilian will have their own unique set of traits, identifying
            their unique role within the CronosVerse society.
          </p>
          <p>
            Along with our own collection of playable Crovilians characters, we
            will work with our project partners to give their NFT Communities
            their very own Metaverse experience within their own CronosVerse
            Land Tiles.
          </p>
          <p>
            So How Do You Get Involved In The CronosVerse? Buy your digital land
            plot, develop your property and community, enter The CronosVerse.
          </p>
        </div>
        <div id="btncontainer">
          <router-link :to="{ path: '/landtiles' }">
            <v-btn id="btns" x-large class="black--text" color="white" dark
              >Purchase A Land Tile</v-btn
            >
          </router-link>
          <router-link :to="{ path: '/faq' }">
            <v-btn id="btns" x-large class="black--text" color="white" dark
              >CRONOSVERSE FAQ</v-btn
            >
          </router-link>
          <v-btn id="btns" x-large class="black--text" color="white" dark
            >Follow Our Socials</v-btn
          >
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "about",

  mounted() {},

  methods: {},
  components: {
    navbar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
#btns {
  margin-right: 10px;
}
#btncontainer {
  margin-left: 10vw;
}

#cronoscontainer h1 {
  margin-left: 10vw;
  margin-top: 2vw;
}
#cronoscontainer p {
  width: 800px;
  margin-left: 10vw;
}
#bodycontainer {
  /* background-color: black; */
  height: 100vh;
}
#bg {
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
#cronossheet {
  position: absolute;
  right: 1;
  margin-left: 45px;
  padding: 11px;
}
#cronossheet h1 {
  font-size: 41px;
  margin-left: 5px;
  margin-bottom: 12px;
}
h1 {
  color: white;
  font-family: "Russo One", sans-serif;
  font-size: 50px;
}
p {
  color: white;
  font-family: "Russo One", sans-serif;
  font-size: 18px;
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
</style>
