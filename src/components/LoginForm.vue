<template>
  <div class="centering" style="top: 50%;left: 50%;height: 100%;">
    <b-card
    style="width:452px;margin:auto;background: rgba(255, 255, 255, 0.9);
border-radius: 10px;"
    tittle="Login"
    class="" 
  >
    <div class="text formtittle">Login</div>
    <div class="line"></div>
    <div style="">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
        <b-form-group
          id="input-group-1"
          label="Username"
          label-for="input-1"
          description=""
          style="text-align:left"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder=""
            required
            class="inputLogin username"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password" label-for="input-2" style="text-align:left">
          <b-form-input
            id="input-2"
            type='password'
            v-model="form.password"
            placeholder=""
            class="inputLogin"
            required
          ></b-form-input>
        </b-form-group>
        <div class="forgetpass"><div style="width:fit-content;float: right;" v-b-modal.modal-center>Lupa password?</div></div>
        <div style="width: 95%;text-align: center;">
          <b-button class="btn" type="submit" variant="primary" style="width:50%;">Login</b-button>
        </div>
      </b-form>
      <b-modal id="modal-center" centered style="width:576px;height:337px" headerClass='p-2 border-bottom-0' footerClass='p-2 border-top-0'>
        <div style="text-align: center;">
          <div style="text-align: center;">
            <p class="text forgetcontent">
              Silahkan menghubungi Superadmin untuk melakukan update password
            </p>
          </div>
        </div>
        <template v-slot:modal-header-close>
          <b-icon icon="x-circle-fill" scale="2" variant="secondary"></b-icon>
        </template>
        <template #modal-footer="{ok}">
          <div style="width: 95%;text-align: center;">
            <b-button class="btn" size="sm" variant="success" @click="ok()" style="width:30%">
              OK
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
  </b-card>
  </div>
  
</template>

<script>

import '../assets/css/style.css';

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    onSubmit(event) {
      event.preventDefault();
      this.$router.push("/home");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>

</style>
