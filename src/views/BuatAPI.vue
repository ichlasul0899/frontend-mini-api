<template>
  <div class="home">
    <navbar />
    <FormBuatAPI />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import FormBuatAPI from "@/components/FormBuatAPI.vue";

export default {
  name: "BuatAPI",
  components: {
    navbar,
    FormBuatAPI,
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
