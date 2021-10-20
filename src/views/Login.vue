<template>
  <div class="LoginFormBG">
    <LoginForm />
  </div>
</template>
<style scoped>
.LoginFormBG {
  height: 100vh;
  margin: 0;
  background-image: url("~@/assets/bakcgroundbuilding.png");
}
</style>
<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  data: function() {
    return {
      images: {
        sample: require("@/assets/bakcgroundbuilding.png"),
      },
    };
  },
  components: {
    LoginForm,
  },
};
</script>
