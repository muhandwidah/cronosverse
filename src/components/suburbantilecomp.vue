<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
    <v-card-title>Suburban Tile</v-card-title>
    <v-card-subtitle>Suburban Tile Owner NFT Card</v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange lighten-2" text>Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Each LAND TILE NFT represents ownership of a digital land plot within The CronosVerse. By owning a LAND TILE, users are able to access The CronosVerse and build their metaverse experience on top of their digital land plot.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
