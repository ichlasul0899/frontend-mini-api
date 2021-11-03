<template>
  <div>
    <navbar />
    <detailAPI />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import detailAPI from "@/components/detailAPI.vue";
import "../assets/css/style.css";

export default {
  components: {
    navbar,
    detailAPI,
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
