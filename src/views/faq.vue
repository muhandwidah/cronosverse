<template>
  <v-app>
    <div>
      <navbar id="navbar" />
    </div>
    <h1>CRONOSVERSE FAQ</h1>
    <div id="expansioncontainer">
      <v-row justify="center">
        <v-expansion-panels dark inset>
          <v-expansion-panel>
            <v-expansion-panel-header
              >How Many Land Tiles Will Be Available?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>
                There are a total of 1208 Land Tiles for Sale in the following
                quantities:
              </p>
              <ul>
                <li>782 Plains Tiles</li>
                <li>310 Suburban Tiles</li>
                <li>116 Commercial Tiles</li>
              </ul>
              <p>
                The City Center of Crotopolis is constructed of the equivalent
                size of 144 Tiles; however, lands within the City Center will
                not be available for sale. Instead, lands in the City Center are
                reserved for social gatherings, project partners and promotional
                content.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >How Much Will A Land Tile Cost?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>
                Land Tiles vary in price based on their usage type and proximity
                to the Crotopolis City Centre. Land prices will be available in
                the very near future. Please stay tuned. The types of tiles
                available are as follows:
              </p>
              <ul>
                <li>Plains Tiles</li>
                <li>Suburban Tiles</li>
                <li>Commerical District Tiles</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >What Can I Do With My Land?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>
                Land owners will be able to build structures on their land for
                their NFT characters, friends, and community members to enjoy.
              </p>
              <p>
                Each Land Tile will come preloaded with the appropriate building
                materials for the designated land use of the tile. Land owners
                will be able to build out their lands as they see fit using the
                building kits from their preloaded inventory; absolutely no
                coding required.
              </p>
              <p>
                Alternatively, Land Owners can import their own 3D digital
                assets created on Blender, Maya, 3DSM our other compatable 3D
                animation software.
              </p>
              <p>
                Prior to launch of our social MMO, Land owners will be given
                time to develop their land tiles in Phase 4. Upon launch of our
                social MMO, changes to land can only be done so periodically,
                and will be imported by our team to launch on the next scheduled
                MMO map update.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >What Is Land Amalgamation & How Does It
              Work?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>
                Land Amalgamation is the joining of two or more advancement land
                tiles. This process allows land owners who have adjacent land
                tiles in the same wallet to permanently join those lands. By
                doing so, users can pool all of the resources in each tile to
                construct larger buildings.
              </p>
              <p>
                **Land Amalgamation can only be done once and will not be
                reversible.***
              </p>
              <p>
                Requests for Land Amalgamations will be made available to land
                owners at the completion of Phase 3. Land owners will then
                exchange their adjacent land tiles tokens for a newly formed
                token and the previously issued tokens will be burned.
              </p>
              <p>Amalgamation is only available for Plains and Suburban Lots</p>
              <li>
                Allowed Formats for Plains (up to 16 adjacent tiles): 1x2, 1x3,
                1x4, 2x2, 2x3, 2x4,3x3, 3x4, or 4x4 configurations
              </li>
              <li>
                Allowed Formats for Suburban Tiles (up to 4 adjacent tiles):
                1x2, 1x3, 1x4, or 2x2
              </li>
              <li>
                Allowed Formats for Commercial Tiles (up to 4 adjacent tiles):
                1x2, 1x3, 1x4, or 2x2
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >Who are the CroVilians?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>
                Crovilians are the future citizens of The CronosVerse. They will
                be available in Phase 3 of our road map. Crovilans will come in
                generative collections and have various traits representing the
                many societal roles needed in the metaverse, such as
                construction workers, tradespeople, teachers, doctors, police
                officers, bankers, professionals, restuarant workers, etc. Each
                Crovilian will serve a different purpose in our metaverse
                society. Holding a Crovilian NFT will grant you access to The
                CronosVerse. Crovilans will need places to live, so they will
                rent lands from land owners, apartments in Crotopolis, and work
                in the various businesses in the City Centre and Commerical
                Districts. Most importanty, Crovilians will build relationships
                with their fellow citizens and become an integrated part of The
                CronosVerse Society.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <h1>Our Project Partners</h1>
    <v-divider></v-divider>
    <div id="supportcontainer"></div>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar.vue";
export default {
  name: "team",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    navbar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
#navbar {
  background-color: black;
}
#expansioncontainer {
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
h1 {
  margin: auto;
  color: black;
  font-family: "Russo One", sans-serif;
  font-size: 50px;
}
</style>
