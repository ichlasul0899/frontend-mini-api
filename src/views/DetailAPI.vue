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
  data() {
    return {

    };
  },
  computed: {
    rows() {
      return this.dataURL.length;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    sendInfo(item) {
      this.selectedUser = item;
    },
  },
};
</script>

<style scoped></style>
