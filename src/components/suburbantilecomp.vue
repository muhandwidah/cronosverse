<template>
  <v-card dark class="mx-auto" max-width="300">
    <v-img src="../assets/cronostiles/suburbantile.png" height="426px"></v-img>
    <v-card-title>Suburban Tile</v-card-title>
    <v-card-subtitle>Suburban Tile Owner NFT Card</v-card-subtitle>
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
          
Suburban tiles surround the Commercial Districts and are in close proximity to the Crotopolis City Center. These land tiles come preloaded with modern, colonial, American craftsmen & mid century building materials. All Suburban Tiles can be amalgamated with adjacent Suburban Tiles to a maximum of 4 tiles in the same wallet.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "suburbantilecomp",
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
