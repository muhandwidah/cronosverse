<template>
  <v-card dark class="mx-auto" max-width="300">
    <v-img src="../assets/cronostiles/plainstile.png" height="426px"></v-img>
    <v-card-title>Plains Tile </v-card-title>
    <v-card-subtitle>Plains Tile Owner NFT Card</v-card-subtitle>
    <v-card-actions>
      <v-btn color="blue lighten-2">Purchase</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          
Plains tiles are furthest from the Crotopolis City Center. These land tiles come preloaded with rustic building materials.  All Plains Tiles can be amalgamated with adjacent Plains Tiles to a maximum of 16 tiles in the same wallet.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "plainstilecomp",
  data: () => ({
    show: false,
  }),
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
