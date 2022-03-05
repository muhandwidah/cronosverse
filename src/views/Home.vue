<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <plainstilecomp />
    <commercialtilecomp />
    <suburbantilecomp />

  </div>
</template>

<script>
// @ is an alias to /src
import plainstilecomp from "@/components/plainstilecomp.vue";
import commercialtilecomp from "@/components/commercialtilecomp.vue";
import suburbantilecomp from "@/components/suburbantilecomp.vue";

export default {
  name: "Home",
  components: {
    plainstilecomp,
    commercialtilecomp,
    suburbantilecomp,
  },
};
</script>
