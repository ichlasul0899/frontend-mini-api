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
    listapi,
  },
  created() {
    if (localStorage.getItem("token") == null) {
      // init variable/set default variable for item
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped></style>
