<template>
  <v-app>
    <div
      id="bg"
      :style="{
        backgroundImage:
          'url(https://www.matrise.no/wp-content/uploads/2020/11/metaverse_illustration-scaled.jpg)',
      }"
    >
      <div id="navcontainer">
        <navbar />
        <h1>Choose a tile</h1>
      </div>
      <div id="container" class="home">
        <plainstilecomp id="card" />
        <commercialtilecomp id="card" />
        <suburbantilecomp id="card" />
      </div>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import plainstilecomp from "@/components/plainstilecomp.vue";
import commercialtilecomp from "@/components/commercialtilecomp.vue";
import suburbantilecomp from "@/components/suburbantilecomp.vue";

export default {
  name: "landtiles",
  components: {
    navbar,
    plainstilecomp,
    commercialtilecomp,
    suburbantilecomp,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
#bg {
  height: 140vh;
  width: 100vw;
}
#container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
#card {
  grid-column-start: auto;
}
#navcontainer {
  margin: 15px;
}
#navcontainer h1 {
  text-align: center;
}
h1 {
  color: white;
  font-family: "Russo One", sans-serif;
  font-size: 50px;
}
</style>
