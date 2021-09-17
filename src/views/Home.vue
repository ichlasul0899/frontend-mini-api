<template>
  <div class="home">
    <navbar />
    <listapi />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import listapi from "@/components/listapi.vue";

export default {
  name: "Home",
  components: {
    navbar,
    listapi
  },
};
</script>

<style scoped></style>
