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
      <b-form @submit.prevent="handleSubmit" @reset="onReset" v-if="show" >
        <b-form-group
          class="text"
          id="input-group-1"
          label="Username"
          label-for="input-1"
          description=""
          style="text-align:left;font-weight: normal;"
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
        <b-form-group class="text" id="input-group-2" label="Password" label-for="input-2" style="text-align:left;font-weight: normal;">
          <b-form-input
          
            id="input-2"
            type='password'
            v-model="form.password"
            placeholder=""
            class="inputLogin"
            required
          ></b-form-input>
          
        </b-form-group>
        <div class="forgetpass text"><div style="width:fit-content;float: right;font-size:14px !important;font-weight: 600;" v-b-modal.modal-center>Lupa password?</div></div>
        <div style="text-align: center;margin-bottom:24px;">
          <b-button class="btn bigbtn text" type="submit" variant="primary" style="width:50%;border-radius:10px !important;">Login</b-button>
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
            <b-button class="btn text" size="sm" variant="success" @click="ok()" style="width:30%">
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

import axios from 'axios';
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
    async handleSubmit(){
      axios.post('http://localhost:3000/auth/login', {
        email : this.form.username,
        password : this.form.password,
      }).then((response) => {
        localStorage.setItem('token', response.data.token);
        //console.log(response)
        this.$router.push("/home");
      }).catch((error) => {
        alert(error.response.data.message);
        //console.log(error.response.data.message)
      })
      // console.log(response);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    onSubmit(event) {
      event.preventDefault();
      
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";

    },
  },
};
</script>

<style scoped>

</style>
