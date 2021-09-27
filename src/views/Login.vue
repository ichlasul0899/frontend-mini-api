<template>
  <div style="height:100%">
    <img class='bgdiv centering' :src="images.sample" style='position:absolute'/>
    <LoginForm />
  </div>
</template>

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
