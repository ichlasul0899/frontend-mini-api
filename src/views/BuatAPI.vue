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

  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
